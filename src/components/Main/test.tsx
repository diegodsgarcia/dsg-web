import { render, screen } from 'utils/test-utils'
import Main from '.'


jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

describe('Main', () => {
  it('should render component', () => {
    render(<Main>Main</Main>)

    expect(
      screen.getByRole('heading', { name: /root@diegodsgarcia-PC:~\/Development\/dsg-web/})
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /cat contact/ })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /cat works/})).toHaveAttribute('href', '/works')
  })
})
