import { FC, MouseEventHandler } from 'react'
import styled from 'styled-components'

type Props = {
  children: string
  color: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const PrimaryButton: FC<Props> = (props) => {
  const { children, color, onClick } = props
  return (
    <SButton className={color} type="submit" onClick={onClick}>
      {children}
    </SButton>
  )
}

const SButton = styled.button`
  ${({ theme }) => theme.breakpoint.base`
    width: 100%;
    border-radius: 10px;
    border: 2px solid ${theme.colors.white};
    cursor: pointer;
    text-align: center;
    padding: 0.3rem;
    color: ${theme.colors.white};
    &.red{
      background-color: ${theme.colors.accent};
    }
    &.blue{
      background-color: ${theme.colors.blue};
    }
    &.yellow{
      background-color: ${theme.colors.secondary};
    }
  `}
`
