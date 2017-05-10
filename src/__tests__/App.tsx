/// <reference types="jest" />
import 'react-native';
import * as React from 'react';
import { App } from '../App';

// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  create(<App />);
});
