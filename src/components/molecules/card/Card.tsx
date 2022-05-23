import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  id: string
  image: string
  category: string
  shop: string
  access: string
}

export const Card: FC<Props> = (props) => {
  const { image, category, shop, access, id } = props
  return (
    <SContainer>
      <a href={`shop/${id}`}>
        <img src={image} alt="shop-logo" />
        <div>
          <h2>{category}</h2>
          <h1>{shop}</h1>
          <ul>
            <li>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
              {access}
            </li>
          </ul>
        </div>
      </a>
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
    a{
      display: flex;
      justify-content: space-between;
      cursor: pointer;
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
            svg{
              color: ${theme.colors.accent};
              width: 0.8rem;
            }
          }
        }
      }
    }
  `}
  ${({ theme }) => theme.breakpoint.sm`
    width: 30%;
    margin: 5px;
    a{
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
