import { render, screen } from 'utils/test-utils'
import CodeEditor from '.'

const code = {
  email: 'test@gmail.com',
  github: 'user-test'
}

describe('Main', () => {
  it('should render component', () => {
    render(<CodeEditor command="cat test" code={code} />)

    screen.getByText(/cat test/)
  })
})
