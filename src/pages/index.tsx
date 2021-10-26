import Main from 'components/Main'
import CodeEditor from 'components/CodeEditor'

const contact = {
  github: 'diegodsgarcia',
  twitter: 'diegodsgarcia',
  email: 'diego.ds.garcia@gmail.com',
  linkedin: 'https://www.linkedin.com/in/diegodsgarcia/',
}

const Home = () => {
  return (
    <Main>
      <CodeEditor command="cat contact" code={contact} />
    </Main>
  )
}

export default Home
