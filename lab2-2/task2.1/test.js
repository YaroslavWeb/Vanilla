import React from 'react';
import chalk from 'chalk';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from './ui';


test('greet unknown user', t => {
	render(<App/>);
});

