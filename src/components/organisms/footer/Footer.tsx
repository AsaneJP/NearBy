import styled from "styled-components"

export const Footer = () => (
  <SFooter>
    <p>© NearBy</p>
  </SFooter>
)

const SFooter = styled.footer`
  ${({ theme }) => theme.breakpoint.base`
    height: 35px;
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 25px;
  `}
`;
