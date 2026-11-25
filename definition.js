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

Blockly.Blocks['gsheet_send_2_cols'] = {
  init: function() {
    this.jsonInit({
      "type": "gsheet_send_2_cols",
      "message0": "gửi 2 cột lên Google Sheets %1 link Web App %2 cột 1 %3 dữ liệu 1 %4 cột 2 %5 dữ liệu 2 %6",
      "args0": [
        { "type": "input_dummy" },
        { "type": "input_value", "name": "URL", "check": "String" },
        { "type": "input_value", "name": "COL1", "check": "String" },
        { "type": "input_value", "name": "VAL1" },
        { "type": "input_value", "name": "COL2", "check": "String" },
        { "type": "input_value", "name": "VAL2" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": GSHEET_COLOR,
      "tooltip": "Gửi gộp 2 cột dữ liệu lên Google Sheets trong 1 request",
      "helpUrl": ""
    });
  }
};

Blockly.Python['gsheet_send_2_cols'] = function(block) {
  Blockly.Python.definitions_['import_gsheet'] = 'import gsheet';
  var url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC) || "''";
  var col1 = Blockly.Python.valueToCode(block, 'COL1', Blockly.Python.ORDER_ATOMIC) || "''";
  var val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC) || '0';
  var col2 = Blockly.Python.valueToCode(block, 'COL2', Blockly.Python.ORDER_ATOMIC) || "''";
  var val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC) || '0';
  return 'gsheet.send_batch(' + url + ', [(' + col1 + ', ' + val1 + '), (' + col2 + ', ' + val2 + ')])\n';
};

Blockly.Blocks['gsheet_send_3_cols'] = {
  init: function() {
    this.jsonInit({
      "type": "gsheet_send_3_cols",
      "message0": "gửi 3 cột lên Google Sheets %1 link Web App %2 cột 1 %3 dữ liệu 1 %4 cột 2 %5 dữ liệu 2 %6 cột 3 %7 dữ liệu 3 %8",
      "args0": [
        { "type": "input_dummy" },
        { "type": "input_value", "name": "URL", "check": "String" },
        { "type": "input_value", "name": "COL1", "check": "String" },
        { "type": "input_value", "name": "VAL1" },
        { "type": "input_value", "name": "COL2", "check": "String" },
        { "type": "input_value", "name": "VAL2" },
        { "type": "input_value", "name": "COL3", "check": "String" },
        { "type": "input_value", "name": "VAL3" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": GSHEET_COLOR,
      "tooltip": "Gửi gộp 3 cột dữ liệu lên Google Sheets trong 1 request",
      "helpUrl": ""
    });
  }
};

Blockly.Python['gsheet_send_3_cols'] = function(block) {
  Blockly.Python.definitions_['import_gsheet'] = 'import gsheet';
  var url = Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_ATOMIC) || "''";
  var col1 = Blockly.Python.valueToCode(block, 'COL1', Blockly.Python.ORDER_ATOMIC) || "''";
  var val1 = Blockly.Python.valueToCode(block, 'VAL1', Blockly.Python.ORDER_ATOMIC) || '0';
  var col2 = Blockly.Python.valueToCode(block, 'COL2', Blockly.Python.ORDER_ATOMIC) || "''";
  var val2 = Blockly.Python.valueToCode(block, 'VAL2', Blockly.Python.ORDER_ATOMIC) || '0';
  var col3 = Blockly.Python.valueToCode(block, 'COL3', Blockly.Python.ORDER_ATOMIC) || "''";
  var val3 = Blockly.Python.valueToCode(block, 'VAL3', Blockly.Python.ORDER_ATOMIC) || '0';
  return 'gsheet.send_batch(' + url + ', [(' + col1 + ', ' + val1 + '), (' + col2 + ', ' + val2 + '), (' + col3 + ', ' + val3 + ')])\n';
};
