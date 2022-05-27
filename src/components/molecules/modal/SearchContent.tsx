import { useRecoilState, useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import { clickFlagState } from '../../../globalState/clickFlagState'
import { menuOpenState } from '../../../globalState/menuOpenState'
import { searchState } from '../../../globalState/searchState'
import { PrimaryButton } from '../../atoms/button/PrimaryButton'
import { InputSlider } from '../../atoms/slider/InputSlider'

export const SearchContent = () => {
  const [search, setSearch] = useRecoilState(searchState)
  const [click, setClick] = useRecoilState(clickFlagState)
  const setOpne = useSetRecoilState(menuOpenState)

  const rangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = [Number(e.target.value), search[1]]
    setSearch(data)
  }
  const areaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = [search[0], Number(e.target.value)]
    setSearch(data)
  }

  const handleClick = () => {
    setClick(!click)
    setOpne(false);
  }

  return (
    <SContainer>
      <h1>検索条件</h1>
      <h2>範囲指定: {search[0]}</h2>
      <InputSlider min={1} max={5} onChange={rangeChange} value={search[0]} />
      <h2>検索件数: {search[1]}</h2>
      <InputSlider min={1} max={100} onChange={areaChange} value={search[1]} />
      <PrimaryButton color="blue" onClick={handleClick}>検索</PrimaryButton>
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
      margin-bottom: 2rem;
    }
    h2{
      margin-top: 0.4rem;
      margin-bottom: 0.25rem;
    }
    button{
      display:flex;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;
    }
  `}
`
