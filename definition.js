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
      "message0": "gửi lên Google Sheets %1 link Web App %2 tên cột %3 dữ liệu %4",
      "args0": [
        { "type": "input_dummy" },
        { "type": "input_value", "name": "URL", "check": "String" },
        { "type": "input_value", "name": "COL", "check": "String" },
        { "type": "input_value", "name": "VAL" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": GSHEET_COLOR,
      "tooltip": "Gửi dữ liệu theo tên cột lên Google Sheets qua Apps Script",
      "helpUrl": ""
    });
  }
};

Blockly.Python['gsheet_send_data'] = function(block) {
  Blockly.Python.definitions_['import_gsheet'] = 'import gsheet';
  var url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC) || "''";
  var col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC) || "''";
  var val = Blockly.Python.valueToCode(block, 'VAL', Blockly.Python.ORDER_ATOMIC) || '0';
  return 'gsheet.send_column_data(' + url + ', ' + col + ', ' + val + ')\n';
};
