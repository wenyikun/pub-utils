import { randomNum, format } from '../src/tool'

test('randomNum 生成指定范围随机数', () => {
  const num1 = randomNum(0, 10)
  expect(num1).toBeGreaterThanOrEqual(0)
  expect(num1).toBeLessThanOrEqual(10)
  const num2 = randomNum(10, 99)
  expect(num2).toBeGreaterThanOrEqual(10)
  expect(num2).toBeLessThanOrEqual(99)
})

test('format 数字千分位分隔', () => {
  expect(format(99)).toBe('99')
  expect(format(100000)).toBe('100,000')
  expect(format(9999999.99)).toBe('9,999,999.99')
})
