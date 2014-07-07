function checkConnection() {

var networkState = navigator.connection.type;
var states = {};
states[Connection.UNKNOWN] = 'Conexão desconhecida';
states[Connection.ETHERNET] = 'Ethernet';
states[Connection.WIFI] = 'WiFi';
states[Connection.CELL_2G] = 'Celular 2G';
states[Connection.CELL_3G] = 'Celular 3G';
states[Connection.CELL_4G] = 'Celular 4G';
states[Connection.CELL] = 'ConexÃ£o celular genérica';
states[Connection.NONE] = 'Sem conexão rede';

$('#tipoConexao).append('Tipo de conexão: '+ states[networkState]);

}
