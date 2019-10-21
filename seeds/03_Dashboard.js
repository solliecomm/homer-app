const uuidv4 = require('uuid/v4');

exports.seed = function seed(knex) {
  const tableName = 'user_settings';

  let empty = {};
  let dashboardHome= '{"alias":"home","config":{"columns":7,"draggable":{"handle":".box-header"},"margins":[10,10],"pushing":true,"resizable":{"enabled":true,"handles":["n","e","s","w","ne","se","sw","nw"]},"maxrows":5},"dashboardId":"home","id":"home","name":"HOME","selectedItem":"","title":"Home","weight":10,"widgets":[{"x":0,"y":0,"cols":1,"rows":3,"name":"protosearch","title":"CALL SIP SEARCH","sizeX":1,"sizeY":3,"col":0,"row":0,"config":{"title":"CALL SIP SEARCH","group":"Search","name":"protosearch","description":"Display Search Form component","refresh":false,"sizeX":2,"sizeY":2,"config":{"title":"CALL SIP SEARCH","searchbutton":true,"protocol_id":{"name":"SIP","value":1},"protocol_profile":{"name":"call","value":"call"}},"uuid":"ed426bd0-ff21-40f7-8852-58700abc3762","fields":[{"field_name":"protocol_header.srcIp","hepid":1,"name":"1:call:protocol_header.srcIp","selection":"Source IP","type":"string"},{"field_name":"sid","hepid":1,"name":"1:call:sid","selection":"Session ID","type":"string"},{"field_name":"protocol_header.protocol","hepid":1,"name":"1:call:protocol_header.protocol","selection":"Protocol Type","type":"string"}],"row":0,"col":1,"cols":2,"rows":2,"x":0,"y":1,"protocol_id":{"name":"SIP","value":100}},"id":"protosearch0"},{"x":1,"y":0,"cols":4,"rows":3,"name":"influxdbchart","title":"Chart 010","sizeX":4,"sizeY":3,"col":1,"row":0,"config":{"title":"Chart 010","chart":{"type":{"value":"line"}},"format":{"value":"row"},"dataquery":{"data":[{"sum":false,"main":{"name":"diskio","value":"diskio"},"database":{"name":"telegraf"},"retention":{"name":"autogen"},"type":[{"name":"io_time","value":"io_time"},{"name":"iops_in_progress","value":"iops_in_progress"},{"name":"read_time","value":"read_time"},{"name":"reads","value":"reads"},{"name":"weighted_io_time","value":"weighted_io_time"},{"name":"write_time","value":"write_time"},{"name":"writes","value":"writes"}],"tag":[],"rawpath":[],"rawquery":[]}]},"panel":{"queries":[{"name":"A1","type":{"name":"influxDB","alias":"influxDB"},"database":{"name":"telegraf"},"retention":{"name":"autogen"},"value":"query"}]}},"id":"influxdbchart1"}],"type":1}';
  //let dashboardHome= '{"id":"home","name":"Home","alias":"home","selectedItem":"","title":"Home","weight":10.0,"widgets":[{"reload":false,"frameless":false,"title":"World Clock","group":"Tools","name":"clock","description":"Display date and time","templateUrl":"widgets/clock/view.html","controller":"clockController","controllerAs":"clock","sizeX":1,"sizeY":1,"config":{"title":"World Clock","timePattern":"HH:mm:ss","datePattern":"YYYY-MM-DD","location":{"value":-60,"offset":"+1","name":"GMT+1 CET","desc":"Central European Time"},"showseconds":false},"edit":{"reload":true,"immediate":false,"controller":"clockEditController","templateUrl":"widgets/clock/edit.html"},"row":0,"col":0,"api":{},"uuid":"0131d42a-793d-47d6-ad03-7cdc6811fb56"},{"title":"Proto Search","group":"Search","name":"protosearch","description":"Display Search Form component","refresh":false,"sizeX":2,"sizeY":1,"config":{"title":"CALL SIP SEARCH","searchbutton":true,"protocol_id":{"name":"SIP","value":1},"protocol_profile":{"name":"call","value":"call"}},"uuid":"ed426bd0-ff21-40f7-8852-58700abc3762","fields":[{"name":"1:call:sid","selection":"Session ID","form_type":"input","hepid":1,"profile":"call","type":"string","field_name":"sid"},{"name":"1:call:protocol_header.srcIp","selection":"Source IP","form_type":"input","hepid":1,"profile":"call","type":"string","field_name":"protocol_header.srcIp"},{"name":"1:call:protocol_header.srcPort","selection":"Src Port","form_type":"input","hepid":1,"profile":"call","type":"integer","field_name":"protocol_header.srcPort"},{"name":"1:call:raw","selection":"SIP RAW","form_type":"input","hepid":1,"profile":"call","type":"string","field_name":"raw"}],"row":0,"col":1},{"title":"InfluxDB Chart","group":"Charts","name":"influxdbchart","description":"Display SIP Metrics","refresh":true,"sizeX":2,"sizeY":1,"config":{"title":"HEPIC Chart","chart":{"type":{"value":"line"}},"dataquery":{"data":[{"sum":false,"main":{"name":"heplify_method_response","value":"heplify_method_response"},"database":{"name":"homer"},"retention":{"name":"60s"},"type":[{"name":"counter","value":"counter"}],"tag":{},"typetag":{"name":"response","value":"response"}}]},"panel":{"queries":[{"name":"A1","type":{"name":"InfluxDB","alias":"influxdb"},"database":{"name":"homer"},"retention":{"name":"60s"},"value":"query"}]}},"edit":{},"api":{},"uuid":"8c8b4589-426a-4016-b964-d613ab6997b3","row":0,"col":3}],"config":{"margins":[10.0,10.0],"columns":"6","pushing":true,"draggable":{"handle":".box-header"},"resizable":{"enabled":true,"handles":["n","e","s","w","ne","se","sw","nw"]}}}';
  //let dashboardRTC = '{"id":"rtc","name":"RTC","alias":"rtc","selectedItem":"","title":"RTC","weight":10.0,"widgets":[{"reload":false,"frameless":false,"title":"World Clock","group":"Tools","name":"clock","description":"Display date and time","templateUrl":"widgets/clock/view.html","controller":"clockController","controllerAs":"clock","sizeX":1,"sizeY":1,"config":{"title":"World Clock","timePattern":"HH:mm:ss","datePattern":"YYYY-MM-DD","location":{"value":-60,"offset":"+1","name":"GMT+1 CET","desc":"Central European Time"},"showseconds":false},"edit":{"reload":true,"immediate":false,"controller":"clockEditController","templateUrl":"widgets/clock/edit.html"},"row":0,"col":0,"api":{},"uuid":"0131d42a-793d-47d6-ad03-7cdc6811fb56"},{"title":"Proto Search","group":"Search","name":"protosearch","description":"Display Search Form component","refresh":false,"sizeX":2,"sizeY":1,"config":{"title":"CALL SIP SEARCH","searchbutton":true,"protocol_id":{"name":"SIP","value":1},"protocol_profile":{"name":"call","value":"call"}},"uuid":"ed426bd0-ff21-40f7-8852-58700abc3762","fields":[{"name":"1:call:sid","selection":"Session ID","form_type":"input","hepid":1,"profile":"call","type":"string","field_name":"sid"},{"name":"1:call:protocol_header.srcIp","selection":"Source IP","form_type":"input","hepid":1,"profile":"call","type":"string","field_name":"protocol_header.srcIp"},{"name":"1:call:protocol_header.srcPort","selection":"Src Port","form_type":"input","hepid":1,"profile":"call","type":"integer","field_name":"protocol_header.srcPort"},{"name":"1:call:raw","selection":"SIP RAW","form_type":"input","hepid":1,"profile":"call","type":"string","field_name":"raw"}],"row":0,"col":1},{"title":"Loki Search","group":"Tools","name":"rsearch","description":"Display date and time","sizeX":2,"sizeY":1,"refresh":false,"config":{"title":"Loki Search","timePattern":"HH:mm:ss","datePattern":"YYYY-MM-DD","location":{"value":-60,"offset":"+1","name":"GMT+1 CET","desc":"Central European Time"},"showseconds":false},"uuid":"2fc4ba76-eb06-40a6-af9f-0d186c4fe4d0","boardID":"home","server":"http://loki:3100"},{"title":"InfluxDB Chart","group":"Charts","name":"influxdbchart","description":"Display SIP Metrics","refresh":true,"sizeX":5,"sizeY":1,"config":{"title":"HEPIC Chart","chart":{"type":{"id":4,"label":"Bar","value":"bar"}},"dataquery":{"data":[{"sum":false,"main":{"name":"jitsi","value":"jitsi"},"database":{"name":"hep"},"retention":{"name":"autogen"},"type":[{"name":"report","value":"report"}],"tag":[],"rawpath":[],"rawquery":[]}]},"panel":{"queries":[{"name":"A1","type":{"name":"InfluxDB","alias":"influxdb"},"database":{"name":"hep"},"retention":{"name":"autogen"},"value":"query"}],"total":false}},"edit":{},"api":{},"uuid":"41503313-9a2e-4062-b599-a760dcc7fc42","boardID":"home","row":1,"col":0}],"config":{"margins":[10,10],"columns":"6","pushing":true,"draggable":{"handle":".box-header"},"resizable":{"enabled":true,"handles":["n","e","s","w","ne","se","sw","nw"]}}}';
  //let dashboardSearch='{"id":"search","name":"Search","alias":"search","selectedItem":"","title":"Search","weight":10.0,"widgets":[{"reload":false,"frameless":false,"title":"World Clock","group":"Tools","name":"clock","description":"Display date and time","templateUrl":"widgets/clock/view.html","controller":"clockController","controllerAs":"clock","sizeX":1.0,"sizeY":1.0,"config":{"title":"World Clock","timePattern":"HH:mm:ss","datePattern":"YYYY-MM-DD","location":{"value":-60.0,"offset":"+1","name":"GMT+1 CET","desc":"Central European Time"},"showseconds":false},"edit":{"reload":true,"immediate":false,"controller":"clockEditController","templateUrl":"widgets/clock/edit.html"},"row":0.0,"col":0.0,"api":{},"$$hashKey":"object:2435"},{"reload":false,"frameless":false,"title":"Search Form Builder","group":"Search","name":"quicksearch","description":"Display Search Form component","templateUrl":"widgets/quicksearch/quicksearch.html","controller":"quickSearchController","controllerAs":"qsearch","sizeX":2.0,"sizeY":1.0,"config":{"title":"QuickSearch","fields":[{"name":"from_user","selection":"From","$$hashKey":"object:2488"},{"name":"to_user","selection":"To","$$hashKey":"object:2489"},{"name":"callid","selection":"Call-ID","$$hashKey":"object:2490"}],"searchbutton":true},"edit":{"reload":true,"immediate":false,"controller":"quickSearchEditController","templateUrl":"widgets/quicksearch/edit.html"},"row":0.0,"col":1.0,"api":{},"$$hashKey":"object:2436"},{"reload":false,"frameless":false,"title":"Sipcapture Stats","group":"Charts","name":"sipcapture","description":"Displaycharts time","templateUrl":"widgets/sipcapture/sipcapture.html","controller":"sipcaptureController","controllerAs":"sipcapture","refresh":true,"sizeX":3.0,"sizeY":1.0,"config":{"title":"Sipcapture Stats","dataquery":{"data":[{"main":{"name":"Calls","value":"calls"},"type":[{"name":"unauth","value":"unauth"},{"name":"finished","value":"finished"},{"name":"canceled","value":"canceled"}]}]},"panel":{"queries":[{"name":"A1","type":{"name":"Sipcapture","alias":"sipcapture"},"value":"query"}],"total":false},"chart":{"size":{"height":250.0},"library":{"id":3.0,"label":"D3JS","value":"d3"},"type":{"id":3.0,"label":"Area spline","value":"areaspline"}},"debugresp":""},"edit":{"reload":true,"immediate":false,"controller":"sipcaptureEditController","templateUrl":"widgets/sipcapture/edit.html"},"api":{},"row":0.0,"col":3.0,"$$hashKey":"object:2437"},{"reload":false,"frameless":false,"title":"Sipcapture Stats","group":"Charts","name":"sipcapture","description":"Displaycharts time","templateUrl":"widgets/sipcapture/sipcapture.html","controller":"sipcaptureController","controllerAs":"sipcapture","refresh":true,"sizeX":5.0,"sizeY":1.0,"config":{"title":"HEP Packets","dataquery":{"data":[{"main":{"name":"Proto","value":"proto"},"type":[{"name":"hepall","value":"hepall","$$hashKey":"object:3065"}],"tag":[]}]},"panel":{"queries":[{"name":"A1","type":{"name":"Sipcapture","alias":"sipcapture"},"value":"query","$$hashKey":"object:2939"}],"total":false},"chart":{"size":{"height":250.0},"library":{"id":3.0,"label":"D3JS","value":"d3"},"type":{"id":3.0,"label":"Area spline","value":"areaspline"}},"debugresp":""},"edit":{"reload":true,"immediate":false,"controller":"sipcaptureEditController","templateUrl":"widgets/sipcapture/edit.html"},"api":{},"row":1.0,"col":1.0,"$$hashKey":"object:2438"},{"reload":false,"frameless":false,"title":"Sipcapture Stats","group":"Charts","name":"sipcapture","description":"Displaycharts time","templateUrl":"widgets/sipcapture/sipcapture.html","controller":"sipcaptureController","controllerAs":"sipcapture","refresh":true,"sizeX":1.0,"sizeY":1.0,"config":{"title":"Sipcapture Stats","chart":{"size":{"height":250.0},"library":{"id":3.0,"label":"D3JS","value":"d3"},"type":{"id":6.0,"label":"Pie","value":"pie"},"legend":{"enabled":true}},"dataquery":{"data":[{"sum":true,"main":{"name":"Calls","value":"calls"},"type":[{"name":"finished","value":"finished"},{"name":"canceled","value":"canceled"},{"name":"unauth","value":"unauth"},{"name":"busy","value":"busy"},{"name":"user_failure","value":"user_failure"}]}]},"panel":{"queries":[{"name":"A1","type":{"name":"Sipcapture","alias":"sipcapture"},"value":"query"}],"total":true},"debugresp":""},"edit":{"reload":true,"immediate":false,"controller":"sipcaptureEditController","templateUrl":"widgets/sipcapture/edit.html"},"api":{},"row":1.0,"col":0.0,"$$hashKey":"object:2439"}],"config":{"margins":[10.0,10.0],"columns":"6","pushing":true,"draggable":{"handle":".box-header"},"resizable":{"enabled":true,"handles":["n","e","s","w","ne","se","sw","nw"]}}}';
  const rows = [
    {
      guid: uuidv4(),
      username: 'admin',
      param: 'home',
      partid: 10,
      category: 'dashboard',
      data: dashboardHome,
      create_date: new Date(),
    },
    {
      guid: uuidv4(),
      username: 'support',
      param: 'home',
      partid: 10,
      category: 'dashboard',
      data: dashboardHome,
      create_date: new Date(),
    },
  ];

  return knex(tableName)
    // Empty the table (DELETE)
    .del()
    .then(function() {
      return knex.insert(rows).into(tableName);
    });
};
