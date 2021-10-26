import Main from 'components/Main'
import works from 'contents/works.json'

import CodeEditor from 'components/CodeEditor'

type WorksProps = {
  works: {
    title: string
    description: string
    date: string
    technologies: string[]
  }[]
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
