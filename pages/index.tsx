import Intro from '../components/Intro/Intro'
import Classification from "../components/Classification/Classification"
import { Select } from '../components/SelectButton/SelectButton';
import { useEffect, useState } from 'react';
export default function Home() {
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

