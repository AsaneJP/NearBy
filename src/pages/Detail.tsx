import styled from 'styled-components'
import { ShopDetail } from '../components/organisms/shops/ShopDetail'
import { Layout } from '../components/templates/Layout'

export const Detail = () => (
  <Layout>
    <SSection>
      <ShopDetail />
    </SSection>
  </Layout>
)

const SSection = styled.section`
  ${({ theme }) => theme.breakpoint.base`
    padding: 3rem 1.25rem 6rem 1.25rem;
    margin: 0 10px;
    background-color: ${theme.colors.bgColor};
    min-height: 100vh;
  `}
  ${({ theme }) => theme.breakpoint.md`
    margin: 0 60px;
  `}
  ${({ theme }) => theme.breakpoint.xl`
    max-width: 1200px;
    margin: 0 auto;
  `}
`
