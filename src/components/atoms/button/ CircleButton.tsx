import styled from 'styled-components'

export const CircleButton = () => (
  <SButton type="button">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
  </SButton>
)

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
