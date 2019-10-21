import React, { useState, useEffect } from 'react'

import { ColorFill } from 'styled-icons/boxicons-solid/ColorFill'

import * as S from './styled'

export function ThemeButton() {

  const [theme, setTheme] = useState(null)
  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  function changeTheme() {
    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
  }

  return (
    <S.Button>
      <ColorFill onClick={changeTheme} />
    </S.Button>
  )
}

export default ThemeButton