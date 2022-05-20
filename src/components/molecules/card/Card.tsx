import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  image: string
  category: string
  shop: string
  detail: string
}

export const Card: FC<Props> = (props) => {
  const { image, category, shop, detail } = props
  return (
    <SContainer>
      <div>
        <img src={image} alt="shop-logo" />
        <div>
          <h2>{category}</h2>
          <h1>{shop}</h1>
          <ul>
            <li>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {detail}
            </li>
          </ul>
        </div>
      </div>
    </SContainer>
  )
}

const SContainer = styled.div`
  ${({ theme }) => theme.breakpoint.base`
    background-color: ${theme.colors.white};
    border-radius: 10px;
    width: 100%;
    overflow: hidden;
    margin-bottom: 1.5rem;
    box-shadow: 0px 0px 10px rgba(3, 3, 3, 0.4);
    div{
      display: flex;
      justify-content: space-between;
      img{
        width: 5rem;
        height: 5rem;
        border-radius: 0px 0px 10px 0px;
        object-fit: cover;
        object-position: center;
      }
      div{
        width: 100%;
        display: block;
        padding: 14px;
        h1{
          font-size: ${theme.fonts.size.base};
          margin-bottom: 0.25rem;
          color: ${theme.colors.subColor};
        }
        h2{
          font-size: ${theme.fonts.size.xs};
          margin-bottom: 0.25rem;
        }
        ul{
          margin-bottom: 1rem;
          li{
            font-size: ${theme.fonts.size.sm};
          }
          svg{
            color: ${theme.colors.accent};
            width: 0.8rem;
          }
        }
      }
    }
  `}
  ${({ theme }) => theme.breakpoint.sm`
    width: 30%;
    margin: 5px;
    div{
      display: block;
      height: 100%;
      img {
        width: 100%;
        height: 10rem;
        border-radius: 0 0 0 0;
        object-fit: cover;
        object-position: center;
      }
      div{
        h1{
          font-size: ${theme.fonts.size.lg};
        }
        h2{
          font-size: ${theme.fonts.size.xs};
        }
        ul{
          li{
            font-size: ${theme.fonts.size.base};
          }
          svg{
            width: 1rem;
          }
        }
      }
    }
  `}
  ${({ theme }) => theme.breakpoint.lg`
    margin: 10px;
  `}
`
