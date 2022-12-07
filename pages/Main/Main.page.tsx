import Intro from '../Intro/Intro.page'
import Classification from "../Classification/Classification.page"
import { useEffect, useState } from 'react';
export default function Main() {
  const [url, setUrl] = useState('')
  useEffect(() => {
    const stg = localStorage.getItem('url')
    if (stg) {
      setUrl(stg)
    }
  }, []
  )
  return (
    <>
      {url ? <Classification /> : <Intro />}
    </>
  )
}
