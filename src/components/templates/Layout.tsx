import { FC } from 'react'
import styled from 'styled-components'
import { Footer } from '../organisms/footer/Footer'
import { Header } from '../organisms/header/Header'

type Props = {
  children: React.ReactNode
}

export const Layout: FC<Props> = (props) => {
  const { children } = props

  return (
    <SContainers>
      <Header />
      <SMain>{children}</SMain>
      <Footer />
    </SContainers>
  )
}

const SContainers = styled.h1`
  ${({ theme }) => theme.breakpoint.base`
    background-color: ${theme.colors.primary};
    height: 100vh;
  `}
`

const SMain = styled.main`
  ${({ theme }) => theme.breakpoint.base`
    background-color: ${theme.colors.primary};
    min-height: 100vh;
    margin-top: 50px;
  `}
`
