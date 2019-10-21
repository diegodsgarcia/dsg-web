const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === 'light') return '#fff'
  if (theme === 'dark') return '#000' 
}

const isDarkTheme = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  return theme === 'dark'
}

export { getThemeColor, isDarkTheme }