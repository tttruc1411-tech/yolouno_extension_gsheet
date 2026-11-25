import gc
import network
import time
import urequests

_wlan = network.WLAN(network.STA_IF)
_ssid = ''
_password = ''

def connect_wifi(ssid, password):
    global _ssid, _password
    _ssid = ssid
    _password = password
    if _wlan.isconnected():
        return True
    _wlan.active(True)
    print('Dang ket noi WiFi:', ssid)
    _wlan.connect(ssid, password)
    timeout = 15
    while not _wlan.isconnected() and timeout > 0:
        time.sleep(1)
        timeout -= 1
    if _wlan.isconnected():
        print('WiFi OK! IP:', _wlan.ifconfig()[0])
        return True
    print('Ket noi WiFi that bai!')
    return False

def _url_encode(s):
    res = []
    for c in str(s).encode('utf-8'):
        if (65 <= c <= 90) or (97 <= c <= 122) or (48 <= c <= 57) or c in (45, 95, 46, 126):
            res.append(chr(c))
        else:
            res.append('%{:02X}'.format(c))
    return ''.join(res)

def _http_get_with_retry(full_url):
    if not _wlan.isconnected():
        if not connect_wifi(_ssid, _password):
            return False
    for attempt in range(2):
        res = None
        try:
            gc.collect()
            res = urequests.get(full_url)
            print('Google Sheets HTTP:', res.status_code)
            return True
        except Exception as e:
            print('Loi gui Google Sheets (lan {}):'.format(attempt + 1), e)
            if attempt == 0:
                time.sleep_ms(500)
        finally:
            if res is not None:
                res.close()
            gc.collect()
    return False

def send_column_data(url, col_name, value):
    if not url or col_name is None or str(col_name).strip() == '':
        return False
    sep = '&' if '?' in url else '?'
    full_url = url + sep + 'col=' + _url_encode(col_name) + '&val=' + _url_encode(value)
    return _http_get_with_retry(full_url)

def send_batch(url, items):
    if not url or not items:
        return False
    params = []
    idx = 1
    for col_name, value in items:
        if col_name is None or str(col_name).strip() == '':
            continue
        params.append('col{}={}&val{}={}'.format(idx, _url_encode(col_name), idx, _url_encode(value)))
        idx += 1
    if not params:
        return False
    sep = '&' if '?' in url else '?'
    full_url = url + sep + '&'.join(params)
    return _http_get_with_retry(full_url)
