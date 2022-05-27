import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { Shops } from '../../../types/api/Shops'
import { Shop } from '../../../types/Shop'
import { Loading } from '../../molecules/loading/Loading'

export const ShopDetail: FC = () => {
  const param = useParams().id

  const [shop, setShop] = useState<Shop>([])

  useEffect(() => {
    let isMounted = true
    axios
      .get<Shops>(
        `${process.env.REACT_APP_CORS_URL}http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.REACT_APP_API_URL}&id=${param}&format=json`
      )
      .then((res) => {
        if (isMounted) {
          setShop(res.data.results.shop)
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    return () => {
      isMounted = false
    }
  }, [param])

  if (shop.length === 0) {
    return <Loading />
  }

  return (
    <SContainer>
      <div>
        <h1>{shop[0].name}</h1>
        <h2>{shop[0].genre.name}</h2>
      </div>
      <img src={shop[0].photo.pc.l} alt="shop" />
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
          {shop[0].access}
        </li>
        <li>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {shop[0].address}
        </li>
      </ul>
    </SContainer>
  )
}

const SContainer = styled.div`
  ${({ theme }) => theme.breakpoint.base`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    div{
      h1{
        font-size: ${theme.fonts.size.base};
        color: ${theme.colors.subColor};
        margin-bottom: 0.25rem;
      }
      h2{
        font-size: ${theme.fonts.size.xs};
        margin-bottom: 0.25rem;
      }
    }
    img{
      margin: 0 auto;
      width: 100%;
      height: 100%;
      max-height: 500px;
      max-width: 500px;
      object-fit: cover;
      object-position: center;
      margin-bottom: 1rem;
    }
    ul{
      text-align: center;
      li{
        font-size: ${theme.fonts.size.sm};
        margin-bottom: 1rem;
        svg{
          color: ${theme.colors.accent};
          width: 0.8rem;
        }
      }
    }
  `}
  ${({ theme }) => theme.breakpoint.sm`
    div{
      h1{
        font-size: ${theme.fonts.size.xl};
      }
      h2{
        font-size: ${theme.fonts.size.lg};
      }
    }
    img{
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    ul{
      li{
        font-size: ${theme.fonts.size.base};
        svg{
          color: ${theme.colors.accent};
          width: 1rem;
        }
      }
    }
  `}
`
