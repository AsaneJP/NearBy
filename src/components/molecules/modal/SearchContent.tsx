import { useState } from 'react'
import styled from 'styled-components'

import { PrimaryButton } from '../../atoms/button/PrimaryButton'
import { InputSlider } from '../../atoms/slider/InputSlider'

export const SearchContent = () => {
  const [range, setRange] = useState(3)
  const [area, setArea] = useState(40)

  const rangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange(Number(e.target.value))
  }
  const areaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArea(Number(e.target.value))
  }
  return (
    <SContainer>
      <h1>検索条件</h1>
      <h2>範囲指定: {range}</h2>
      <InputSlider min={1} max={5} onChange={rangeChange} value={range} />
      <h2>検索件数: {area}</h2>
      <InputSlider min={1} max={100} onChange={areaChange} value={area} />
      <div className="button-group">
        <PrimaryButton color="red">リセット</PrimaryButton>
        <PrimaryButton color="yellow">キャンセル</PrimaryButton>
      </div>
      <PrimaryButton color="blue">検索</PrimaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  ${({ theme }) => theme.breakpoint.base`
    background-color: ${theme.colors.white};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 50%;
    max-width: 400px;
    border-radius: 10px;
    padding: 1rem 1rem;
    border: solid 2px ${theme.colors.primary};
    h1{
      text-align: center;
      font-size: ${theme.fonts.size.lg};
      color: ${theme.colors.subColor};
      margin-top: 0.35rem;
      margin-bottom: 0.35rem;
    }
    h2{
      margin-top: 0.4rem;
      margin-bottom: 0.25rem;
    }
    .button-group{
      display:flex;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;
      margin-bottom: 0.25rem;
    }
  `}
`
