import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Shops } from '../../../types/api/Shops'
import { Shop } from '../../../types/Shop'
import { Card } from '../../molecules/card/Card'

export const ShopsList = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [shop, setShop] = useState<Shop>([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude, longitude } = data.coords
      setPosition({ latitude, longitude })
    })
  }, [])

  useEffect(() => {
    let isMounted = true
    axios
      .get<Shops>(
        `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.REACT_APP_API_URL}&lat=${position.latitude}&lng=${position.longitude}&range=5&count=100&format=json`
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
  }, [position])

  return (
    <SSection>
      {shop.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          image={data.photo.pc.l}
          category={data.genre.name}
          shop={data.name}
          detail={data.address}
        />
      ))}
    </SSection>
  )
}

const SSection = styled.section`
  ${({ theme }) => theme.breakpoint.base`
    padding: 3rem 1.25rem 6rem 1.25rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 10px;
    background-color: ${theme.colors.bgColor};
  `}
  ${({ theme }) => theme.breakpoint.md`
    margin: 0 60px;
  `}
  ${({ theme }) => theme.breakpoint.xl`
    max-width: 1200px;
    margin: 0 auto;
  `}
`
