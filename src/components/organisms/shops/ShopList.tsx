import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { clickFlagState } from '../../../globalState/clickFlagState'
import { searchState } from '../../../globalState/searchState'
import { Shops } from '../../../types/api/Shops'
import { Shop } from '../../../types/Shop'
import { Card } from '../../molecules/card/Card'
import { Loading } from '../../molecules/loading/Loading'

export const ShopsList = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [shop, setShop] = useState<Shop>([])
  const [loading, setLoading] = useState(true)
  const click = useRecoilValue(clickFlagState)
  const search = useRecoilValue(searchState)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude, longitude } = data.coords
      setPosition({ latitude, longitude })
    })
  }, [])

  useEffect(() => {
    let isMounted = true

    setLoading(true)

    axios
      .get<Shops>(
        `${process.env.REACT_APP_CORS_URL}http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.REACT_APP_API_URL}&lat=${position.latitude}&lng=${position.longitude}&range=${search[0]}&count=${search[1]}&format=json`
      )
      .then((res) => {
        if (isMounted) {
          setShop(res.data.results.shop)
          setLoading(false)
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    return () => {
      isMounted = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, click])

  if (loading) {
    return <Loading />
  }

  return (
    <SSection>
      {shop.map((data) => (
        <Card
          key={data.id}
          id={data.id}
          image={data.photo.pc.l}
          category={data.genre.name}
          shop={data.name}
          access={data.access}
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
