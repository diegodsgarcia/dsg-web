import Main from 'components/Main'
import works from 'contents/works.json'

import CodeEditor from 'components/CodeEditor'

type WorksProps = {
  works: any
}

const Works = ({ works }: WorksProps) => {
  return (
    <Main>
      <CodeEditor command="cat works" code={works} />
    </Main>
  )
}

export function getStaticProps() {
  return {
    props : {
      works
    }
  }
}

export default Works
