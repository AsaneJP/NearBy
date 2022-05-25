import { FC } from 'react'

import { CircleButton } from '../components/atoms/button/ CircleButton'
import { ShopsList } from '../components/organisms/shops/ShopList'
import { Layout } from '../components/templates/Layout'

export const Home: FC = () => (
  <Layout>
    <ShopsList />
    <CircleButton />
  </Layout>
)
