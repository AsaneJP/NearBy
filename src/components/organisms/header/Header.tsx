import styled from "styled-components";

export const Header = () => (
  <SHeader>
    <h1>NearBy</h1>
  </SHeader>
)

const SHeader = styled.header`
  ${({ theme }) => theme.breakpoint.base`
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.secondary};
    font-size: ${theme.fonts.size.xl};
    color: ${theme.colors.font};
    font-weight: ${theme.fonts.weight.bold};
    box-shadow: 0px 10px 10px 0px rgba(252,190,097,0.4);
  `}
`;
