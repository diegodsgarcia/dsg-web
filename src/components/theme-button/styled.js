import styled from 'styled-components'

const Button = styled.button`
  position: fixed;
  width: 50px;
  height: 50px;
  border: 0;
  bottom: 1rem;
  right: 1rem;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  svg {
    fill: var(--themeButton);
  }
`

export { Button } 