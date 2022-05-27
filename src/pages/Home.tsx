import { FC, useState } from 'react'

import { CircleButton } from '../components/atoms/button/ CircleButton'
import { SearchWindow } from '../components/organisms/search/SearchWindow'
import { ShopsList } from '../components/organisms/shops/ShopList'
import { Layout } from '../components/templates/Layout'
import { ScrollControl } from '../hooks/ScrollControl'

export const Home: FC = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  ScrollControl(open)

  return (
    <Layout>
      {open && <SearchWindow />}
      <ShopsList />
      <CircleButton onClick={handleClick}>
        {open ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </CircleButton>
    </Layout>
  )
}
