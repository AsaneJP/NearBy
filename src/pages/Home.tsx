import { FC, useState } from "react"
import styled from "styled-components"
import { CircleButton } from "../components/atoms/button/ CircleButton"
import { Layout } from "../components/templates/Layout"

export const Home: FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude, longitude } = data.coords
      setPosition({ latitude, longitude })
    })
  }

  return (
    <Layout>
      <h1>aa</h1>
      <CircleButton/>
    </Layout>
  )
}
