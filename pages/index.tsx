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

export function Select2(){
  const [click, setClick] = useState('')
  useEffect(() => {
    const Select = sessionStorage.getItem('Select')
    if (Select) {
      setClick(Select)
    }
  }, []
  )
  return(
    <>
    {click ? <Select /> : <Intro />}
    </>
  )
}

export function Intro2(){
  const [click, setClick] = useState('')
  useEffect(() => {
    const backI = sessionStorage.getItem('backI')
    if (backI) {
      setClick(backI)
    }
  }, []
  )
  return(
    <>
    {click ? <Intro /> : <Select />}
    </>
  )
}