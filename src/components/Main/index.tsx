import { ReactNode } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'
import * as S from './styled'

export type MainProps = {
  children: ReactNode
}

type TabItemProps = {
  href: string
  children: ReactNode
}

const TabItem = ({ href, children }: TabItemProps) => {
  const router = useRouter()

  return (
    <Link href={href} passHref>
      <S.Item isActive={router.asPath === href}>{children}</S.Item>
    </Link>
  )
}

const Main = ({ children }: MainProps) => {
  return (
    <>
      <S.Header>
        <S.Title>root@diegodsgarcia-PC:~/Development/dsg-web</S.Title>
      </S.Header>
      <S.Nav>
        <TabItem href="/">
          cat contact
        </TabItem>
        <TabItem href="/works">
          cat works
        </TabItem>
      </S.Nav>
      <S.Body>
        {children}
      </S.Body>
    </>
  )
}

export default Main
