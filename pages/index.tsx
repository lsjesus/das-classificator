import { GoogleSpreadsheet } from "google-spreadsheet";
import { sheets } from "googleapis/build/src/apis/sheets";
import { Suspense, useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
export default function Home() {
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
const [url, setUrl] = useState('')
const [rowData, setRowData] = useState<string[]>([])
var c = 0
const [num, setNum] = useState(0)
useEffect(() => {
  c ++
  setNum(localStorage.getItem('id') !== null ? JSON.parse(localStorage.getItem('id')) : 0)
  if(c === 1){
    getUser(localStorage.getItem('id') !== null ? JSON.parse(localStorage.getItem('id')) : 0)
    document.addEventListener('keydown', (e) => {
      if(e.key === 'ArrowRight'){
      pJotinha('1')
    }
  else if(e.key === 'ArrowLeft'){pJotinha('0')}})
  }
}, [])
useEffect(()=>{
  if(num !== 0){
    localStorage.setItem('id', num.toString())
  }
  
}, [num])

const getUser = async (id:number) => {
  try{
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
    }
    )

    await doc.loadInfo()
    const sheet = doc.sheetsById[SHEET_ID]
    const rows =await sheet.getRows()
    const row = rows[id - 2]
    console.log(id)
    setRowData(row);
  }

    catch (e) {
      console.error('Error: ', e);
    }
}

const pJotinha = async (classification:string) => {
  let stg = localStorage.getItem('id') !== null ? JSON.parse(localStorage.getItem('id')) : 0
  try{
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
    }
    )
    await doc.loadInfo()
    const sheet = doc.sheetsById[SHEET_ID]
    await sheet.loadCells()
    const rCell = `E${stg}`
    const cell = await sheet.getCellByA1(rCell)
    cell.value = classification
    await sheet.saveUpdatedCells()
    setNum(stg + 1)
    getUser(stg + 1)
    console.log(url)
  }

  catch (e) {
    console.error('Error: ', e);
  }
}


  return (
    <div>
      <h1 className={styles.title}>eice</h1>
      <input id='link' placeholder="Insira o Link da Planilha"></input>
      {<p >{rowData['profile_name']}, {rowData['user_name']}, <img src={rowData['profile_image_url']} width='10%'></img></p>}

      <button onClick={()=>{
        pJotinha('0')
      }}>Não é pjotinha</button>
      
      <button onClick={()=>{
        pJotinha('1')
      }}>É pjotinha</button>
    </div>
  )
}
