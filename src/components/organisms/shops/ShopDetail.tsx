import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Shops } from '../../../types/api/Shops'
import { Shop } from '../../../types/Shop'

export const ShopDetail: FC = () => {
  const param = useParams().id

  const [shop, setShop] = useState<Shop>([])

  useEffect(() => {
    let isMounted = true
    axios
      .get<Shops>(
        `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.REACT_APP_API_URL}&id=${param}&format=json`
      )
      .then((res) => {
        if (isMounted) {
          setShop(res.data.results.shop)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    return () => {
      isMounted = false
    }
  }, [param])

  if (shop.length === 0) {
    return <h1>読み込み中</h1>
  }

  return (
    <SContainer>
      <h1>{shop[0].name}</h1>
      <h2>{shop[0].genre.name}</h2>
      <img src={shop[0].photo.pc.l} alt="shop" />
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
    h1{
      font-size: ${theme.fonts.size.base};
      color: ${theme.colors.subColor};
    }
    h2{
      font-size: ${theme.fonts.size.xs};
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  `}
  ${({ theme }) => theme.breakpoint.md`
  `}
  ${({ theme }) => theme.breakpoint.xl`
  `}
`
