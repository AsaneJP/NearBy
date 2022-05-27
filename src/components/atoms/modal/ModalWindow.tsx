import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const ModalWindow: FC<Props> = (props) => {
  const { children } = props
  return <SModal>{children}</SModal>
}

const SModal = styled.div`
  ${({ theme }) => theme.breakpoint.base`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
  `}
`
