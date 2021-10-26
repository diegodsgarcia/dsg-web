import * as S from './styled'

export type CodeProps = {
  command: string
  code: Record<string, unknown> | Record<string, unknown>[]
}

const CodeEditor = ({ command, code }: CodeProps) => {
  return (
    <S.Wrapper>
      <S.CommandLine>
        <S.Path>~/Development/dsg-web(<S.Branch>main</S.Branch>) </S.Path>
        <S.Arrow>»</S.Arrow>
        <S.Command>{command}</S.Command>
      </ S.CommandLine>
      <S.Pre>
        {JSON.stringify(code, null, 2)}
      </S.Pre>
    </S.Wrapper>
  )
}

export default CodeEditor
