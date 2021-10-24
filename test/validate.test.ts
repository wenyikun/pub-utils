import { isIos } from '../src/validate'

test('isAndroid', () => {
  const ua = jest.spyOn(window.navigator, 'userAgent', 'get')
  ua.mockReturnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/94.0.4606.71')
  expect(isIos).toBe(false)
})
