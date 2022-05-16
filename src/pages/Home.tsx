import axios from "axios"
import { FC, useEffect, useState } from "react"
import { CircleButton } from "../components/atoms/button/ CircleButton"
import { Layout } from "../components/templates/Layout"
import { Shops} from "../types/api/Shops"
import { Shop } from "../types/Shop"

export const Home: FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [shop, setShop] = useState<Shop>([]);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude, longitude } = data.coords
      setPosition({ latitude, longitude })
    })
  }

  useEffect(() => {
    let isMounted = true
    axios
      .get<Shops>(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${process.env.REACT_APP_API_URL}&large_area=Z011&format=json`)
      .then((res) => {
        if (isMounted) {
          setShop(res.data.results.shop);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    return () => {
      isMounted = false;
    }
  }, [])
  console.log(shop);
  return (
    <Layout>
      <CircleButton/>
    </Layout>
  )
}
