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
const [num, setNum] = useState(2)
useEffect(() => {document.addEventListener('keypress', (e) => {console.log(e.key)})}, [])
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
    
    setRowData(rowData => [...rowData, row]);
  }

    catch (e) {
      console.error('Error: ', e);
    }
}

const pJotinha = async (classification:string) => {
  try{
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
    }
    )
    await doc.loadInfo()
    const sheet = doc.sheetsById[SHEET_ID]
    await sheet.loadCells()
    const rCell = `E${num}`
    const cell = await sheet.getCellByA1(rCell)
    cell.value = classification
    await sheet.saveUpdatedCells()
    setNum(num + 1)
    getUser(num + 1)
  }

  catch (e) {
    console.error('Error: ', e);
  }
}


  return (
    <div>
      <h1 className={styles.title}>eice</h1>
      {/* <button onClick={()=>{
        getUser(num)
      }}>Get USer</button> */}
      {rowData.map((item,index)=>(
        <p key = {index}>{item['profile_name']}, {item['user_name']}, <img src={item['profile_image_url']} width='10%'></img></p>
      ))}

      <button onClick={()=>{
        pJotinha('0')
      }}>Não é pjotinha</button>
      
      <button onClick={()=>{
        pJotinha('1')
      }}>É pjotinha</button>
    </div>
  )
}
