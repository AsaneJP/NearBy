import styled from 'styled-components'
import { Loader } from '../../atoms/loading/Loader'

export const Loading = () => (
  <SContainer>
    <Loader />
  </SContainer>
)

const SContainer = styled.div`
  height: 100%;
  width: 100%;
`
