import { FC, useState } from "react"
import styled from "styled-components"
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
    </Layout>
  )
}

const STitle = styled.h1`
  color: red;
`;
