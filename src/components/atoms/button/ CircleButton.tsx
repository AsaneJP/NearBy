import { FC, MouseEventHandler, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const CircleButton: FC<Props> = (props) => {
  const { onClick, children } = props
  return (
    <SButton type="button" onClick={onClick}>
      {children}
    </SButton>
  )
}

const SButton = styled.button`
  ${({ theme }) => theme.breakpoint.base`
    position: fixed;
    bottom: 45px;
    right: 30px;
    background-color:${theme.colors.accent};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.5);
    svg{
      color: ${theme.colors.white};
      width: 35px;
    }
  `}
`
