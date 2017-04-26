import { Api } from '../../src/api'

describe('Api class', () => {
  let api = new Api();

  beforeEach(() => {
    api = new Api();
  });

  test('setAccessToken set Authorization HTTP header', () => {
    const token = 'abc';
    const expected = `Bearer ${token}`;
    api.setAccessToken(token);
    expect(api['baseConfig']['headers']['Authorization']).toBe(expected);
  });
});
