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
    _wlan.active(True)
    if not _wlan.isconnected():
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

def send_data(url, light, temp, humi):
    try:
        if not _wlan.isconnected():
            if not connect_wifi(_ssid, _password):
                return False
        full_url = '{}?light={}&temp={}&humi={}'.format(url, light, temp, humi)
        res = urequests.get(full_url)
        print('Google Sheets HTTP:', res.status_code)
        res.close()
        return True
    except Exception as e:
        print('Loi gui Google Sheets:', e)
        return False
