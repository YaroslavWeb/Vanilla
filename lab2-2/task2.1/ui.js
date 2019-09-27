'use strict';
const React = require('react');
const PropTypes = require('prop-types');
const {Text, Color, Box} = require('ink');

/**
 * Написать программу, скинирующую сеть
 * в указанном диапазоне IP адресов
 * на наличее активных компьютеров.
 */

let start = '192.168.0.1';
let end = '192.168.0.56';
let goodIp = [],
	badIp = [];

for (let ip = ip2int(start); ip <= ip2int(end); ip++) {
	const ipStr = int2ip(ip);
	if (connect()) {
	  goodIp.push(ipStr);
	} else {
	  badIp.push(ipStr);
	}
  }


const App = () => (
	<Box flexDirection="column" alignItems='center'>
		<Text>Скан ip адресов от  
			<Color blue> {start}</Color> до
			<Color blue> {end}</Color>
		</Text>
		<Box flexDirection='row'>
		 <Box flexDirection="column">
			<Text><Color blueBright>Принято</Color></Text>
		 {goodIp.map(x => (
			<Box key={x}><Color green>{x}</Color></Box>
		 ))}
		 </Box>
		
		 <Box flexDirection='column'>
			 <Text>  |  </Text>
		 </Box>

		 <Box flexDirection="column">
			<Text><Color blueBright>Не найдено</Color></Text>
		 {badIp.map(y => (
			<Box key={y}><Color red>{y}</Color></Box>
		 ))}
		 </Box>
		</Box>
		
	</Box>
);

App.propTypes = {
	name: PropTypes.string
};

App.defaultProps = {
	name: 'Stranger'
};

function connect() {
	return Math.round(Math.random());
  }
  
  function int2ip(ipInt) {
	return ((ipInt >>> 24) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt & 255));
  }
  
  function ip2int(ip) {
	return ip.split('.').reduce(function (ipInt, octet) {
	  return (ipInt << 8) + parseInt(octet, 10)
	}, 0) >>> 0;
  }

module.exports = App;

