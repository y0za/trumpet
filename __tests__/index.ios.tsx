/// <reference types="jest" />
import 'react-native';
import * as React from 'react';
import { App } from '../src/app-ios';

// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';

it('renders correctly', () => {
  const tree = create(
    <App />
  );
});
