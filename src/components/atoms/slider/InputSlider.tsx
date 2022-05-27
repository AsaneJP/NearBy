import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  min: number
  max: number
  value: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputSlider: FC<Props> = (props) => {
  const { min, max, value, onChange } = props
  return <SInput type="range" min={min} max={max} onChange={onChange} value={value} />
}

const SInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: #8acdff;
  height: 14px;
  width: 100%;
  border-radius: 10px;
  border: solid 3px #dff1ff;
  outline: 0;
  &:focus {
    box-shadow: 0 0 3px rgb(0, 161, 255);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #53aeff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
  }
  &::-moz-range-thumb {
    background: #53aeff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15);
    border: none;
  }
  &::-moz-focus-outer {
    border: 0;
  }
  &:active::-webkit-slider-thumb {
    box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.3);
  }
`
