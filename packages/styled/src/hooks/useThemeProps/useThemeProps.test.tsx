import React from 'react'
import {renderHook, cleanup} from 'react-hooks-testing-library'
import {ThemeProvider} from 'styled-components'
import useThemeProps from '.'

afterEach(cleanup)

test('should return empty object - no provider', () => {
  const {result} = renderHook(() => useThemeProps())
  expect(result.current).toEqual({})
})

const emptyTheme = ({children}: {children: any}) => (
  <ThemeProvider theme={{}}>{children}</ThemeProvider>
)
test('should return empty object - empty theme', () => {
  const {result} = renderHook(() => useThemeProps(), {wrapper: emptyTheme})
  expect(result.current).toEqual({})
})

const emptyDatepickerTheme = ({children}: {children: any}) => (
  <ThemeProvider theme={{reactDatepicker: {}}}>{children}</ThemeProvider>
)
test('should return empty object - empty reactDatepicker', () => {
  const {result} = renderHook(() => useThemeProps(), {wrapper: emptyDatepickerTheme})
  expect(result.current).toEqual({})
})

const datepickerTheme = ({children}: {children: any}) => (
  <ThemeProvider theme={{reactDatepicker: {width: '50px'}}}>{children}</ThemeProvider>
)
test('should return theme values', () => {
  const {result} = renderHook(() => useThemeProps(['width', 'height']), {wrapper: datepickerTheme})
  expect(result.current).toEqual({width: '50px', height: undefined})
})