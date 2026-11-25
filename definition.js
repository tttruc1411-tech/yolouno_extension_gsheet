const GSHEET_COLOR = "#0f9d58";

Blockly.Blocks['gsheet_wifi_connect'] = {
  init: function() {
    this.jsonInit({
      "type": "gsheet_wifi_connect",
      "message0": "kết nối WiFi %1 mật khẩu %2",
      "args0": [
        { "type": "input_value", "name": "SSID", "check": "String" },
        { "type": "input_value", "name": "PASS", "check": "String" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": GSHEET_COLOR,
      "tooltip": "Kết nối Yolo UNO với mạng WiFi 2.4GHz",
      "helpUrl": ""
    });
  }
};

Blockly.Python['gsheet_wifi_connect'] = function(block) {
  Blockly.Python.definitions_['import_gsheet'] = 'import gsheet';
  var ssid = Blockly.Python.valueToCode(block, 'SSID', Blockly.Python.ORDER_ATOMIC) || "''";
  var pass = Blockly.Python.valueToCode(block, 'PASS', Blockly.Python.ORDER_ATOMIC) || "''";
  return 'gsheet.connect_wifi(' + ssid + ', ' + pass + ')\n';
};

Blockly.Blocks['gsheet_send_data'] = {
  init: function() {
    this.jsonInit({
      "type": "gsheet_send_data",
      "message0": "gửi lên Google Sheets %1 link Web App %2 ánh sáng %3 nhiệt độ %4 độ ẩm %5",
      "args0": [
        { "type": "input_dummy" },
        { "type": "input_value", "name": "URL", "check": "String" },
        { "type": "input_value", "name": "LIGHT" },
        { "type": "input_value", "name": "TEMP" },
        { "type": "input_value", "name": "HUMI" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": GSHEET_COLOR,
      "tooltip": "Gửi dữ liệu ánh sáng, nhiệt độ, độ ẩm lên Google Sheets qua Apps Script",
      "helpUrl": ""
    });
  }
};

Blockly.Python['gsheet_send_data'] = function(block) {
  Blockly.Python.definitions_['import_gsheet'] = 'import gsheet';
  var url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC) || "''";
  var light = Blockly.Python.valueToCode(block, 'LIGHT', Blockly.Python.ORDER_ATOMIC) || '0';
  var temp = Blockly.Python.valueToCode(block, 'TEMP', Blockly.Python.ORDER_ATOMIC) || '0';
  var humi = Blockly.Python.valueToCode(block, 'HUMI', Blockly.Python.ORDER_ATOMIC) || '0';
  return 'gsheet.send_data(' + url + ', ' + light + ', ' + temp + ', ' + humi + ')\n';
};
