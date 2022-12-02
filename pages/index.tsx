import { GoogleSpreadsheet } from "google-spreadsheet";
import { sheets } from "googleapis/build/src/apis/sheets";
import { Suspense, useState } from "react";
export default function Home() {
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = process.env.REACT_APP_SHEET_ID;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
const [data, setData] = useState([])
const [url, setUrl] = useState('')
const [cell_data, setCell_data] = useState('')

const createSpreadsheet = async () => {
  try{
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
    }
  )
  await doc.addSheet({title:'oi'}) 
  await doc.loadInfo()
  const firstSheet = doc.sheetsById[SHEET_ID]
  const rows = await firstSheet.getRows()
  console.log(firstSheet.headerValues)
  const newSheet = doc.sheetsById[Object.values(doc.sheetsByIndex).slice(-1)[0].sheetId]
  await newSheet.setHeaderRow(firstSheet.headerValues)
  newSheet.addRows(rows)
  setUrl(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit#gid=${Object.values(doc.sheetsByIndex).slice(-1)[0].sheetId}`)
}
  catch (e) {
    console.error('Error: ', e);
  }
  
}

const validateUser = async () => {
  try{
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
    }
    )
    await doc.loadInfo()
    const sheet = doc.sheetsById['28513']
    await sheet.loadCells()
    for (var nL = 2; ; nL++){
      nL.toString()
    }
    const rCell = 'B'+nL
    const cell = await sheet.getCellByA1(rCell)
    cell.value = 'validado'
    await sheet.saveUpdatedCells()
    
    console.log(cell)
  }

    catch (e) {
      console.error('Error: ', e);
    }

}

const appendSpreadsheet = async () => {

  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    console.log(doc)
    const sheet = doc.sheetsById[SHEET_ID];
    const rows = await sheet.getRows()
    const theusSheet = sheet.addRows[SHEET_ID, {Nome: 'theus', Idade: '16'}]
    console.log(rows[0])
    setData(rows)
  } catch (e) {
    console.error('Error: ', e);
  }
};

  return (
    <div>
      {/* <button onClick={appendSpreadsheet}>Get Rows</button>
      {data.map((item)=>(
        <p>{item['Nome']} : {item['Idade']}: {item['Status']}</p>
      ))} */}

      <button onClick={createSpreadsheet}>Criar Planilha</button>
      <a href={url}>{url}</a>

      <button onClick={validateUser}>clica aqui</button>
    </div>
  )
}
