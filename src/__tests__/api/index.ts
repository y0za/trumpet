import { Api } from '../../api'

describe('Api class', () => {
  const baseUrl = 'http://localhost'
  let api = new Api(baseUrl);

  beforeEach(() => {
    api = new Api(baseUrl);
  });

  test('setAccessToken set Authorization HTTP header', () => {
    const token = 'abc';
    const expected = `Bearer ${token}`;
    api.setAccessToken(token);
    expect(api['baseConfig']['headers']['Authorization']).toBe(expected);
  });
});
