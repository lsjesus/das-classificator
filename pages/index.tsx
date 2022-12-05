import { GoogleSpreadsheet, GoogleSpreadsheetRow, GoogleSpreadsheetWorksheet } from "google-spreadsheet";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
export default function Home() {
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const SHEET_ID = process.env.REACT_APP_SHEET_ID
    ? process.env.REACT_APP_SHEET_ID
    : "";
  const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL
    ? process.env.REACT_APP_GOOGLE_CLIENT_EMAIL
    : "";
  const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY
    ? process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY
    : "";
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  const [rows, setRows] = useState<GoogleSpreadsheetRow[]>([]);
  const [sheet, setSheet] = useState<GoogleSpreadsheetWorksheet>();
  const [rowData, setRowData] = useState<GoogleSpreadsheetRow>();
  const [counter, setCounter] = useState(0)
  const [num, setNum] = useState(0);
  const getSheet = async () => {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    sheet.loadCells()
    const qrows = await sheet.getRows();
    setSheet(sheet)
    setRows(qrows)
  };
  useEffect(() => {
    getSheet()
  }, []);
  useEffect(()=>{
    if (!!rows && counter === 0 && rows.length > 0){
        setCounter(5)
        const t = localStorage.getItem("id");
        getUser(t !== null ? JSON.parse(t) : 0);
        document.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight") {
            pJotinha("1");
          } else if (e.key === "ArrowLeft") {
            pJotinha("0");
          }
        });
        
    }
  }, [rows])
  useEffect(() => {
    if (num !== 0) {
      localStorage.setItem("id", num.toString());
    }
  }, [num]);

  const getUser = async (id: number) => {
    try {
      const row = rows ? rows[id - 2] : rows;
      setRowData(row);
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const pJotinha = async (classification: string) => {
    const t = localStorage.getItem("id");
    let stg = t !== null ? JSON.parse(t) : 0;
    try {
      if(sheet){
        const rCell = `E${stg}`;
        const cell =   sheet.getCellByA1(rCell);
        cell.value = classification;
         sheet.saveUpdatedCells();
        setNum(stg + 1);
        getUser(stg + 1);
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>eice</h1>
      <input id="link" placeholder="Insira o Link da Planilha"></input>
      {rowData ? (
        <p>
          {rowData["profile_name"]}, {rowData["user_name"]},{" "}
          <img
            alt="imagem"
            src={rowData["profile_image_url"]}
            width="10%"
          ></img>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
