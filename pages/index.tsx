import Intro from './Intro/Intro'
import Classification from "./Classification/Classification"
import { useEffect, useState } from 'react';
export default function Index() {
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
      {url ? <Classification/> : <Intro/>}
    </>
  )
}
