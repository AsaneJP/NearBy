import { useEffect } from 'react'

type Style = {
  height: string
  left: string
  overflow: string
  position: string
  top: string
  width: string
}

const ScrollControl = (fixed: boolean) => {
  useEffect(() => {
    /**
     * 表示されているスクロールバーとの差分を計測し、背面固定時はその差分body要素に余白を生成する
     */
    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    document.body.style.paddingRight = fixed ? `${scrollbarWidth}px` : ''

    /**
     * スクロール位置を取得する要素を出力する(`html`or`body`)
     */
    // eslint-disable-next-line
    const scrollingElement: any = () => {
      const browser = window.navigator.userAgent.toLowerCase()
      if ('scrollingElement' in document) return document.scrollingElement
      if (browser.indexOf('webkit') > 0) return document.body
      return document.documentElement
    }

    /**
     * 変数にスクロール量を格納
     */
    // eslint-disable-next-line
    const scrollY = fixed ? scrollingElement().scrollTop : parseInt(document.body.style.top || '0')

    /**
     * CSSで背面を固定
     */
    const styles: Style = {
      height: '100vh',
      left: '0',
      overflow: 'hidden',
      position: 'fixed',
      top: `${scrollY * -1}px`,
      width: '100vw',
    }
    Object.keys(styles).forEach((key) => {
      // @ts-ignore
      // eslint-disable-next-line
      document.body.style[key] = fixed ? styles[key] : ''
    })

    /**
     * 背面固定解除時に元の位置にスクロールする
     */
    if (!fixed) window.scrollTo(0, scrollY * -1)
  }, [fixed])
}

export { ScrollControl }
