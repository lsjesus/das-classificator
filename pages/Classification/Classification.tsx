import { GoogleSpreadsheet, GoogleSpreadsheetRow, GoogleSpreadsheetWorksheet } from "google-spreadsheet";
import { useState, useEffect } from "react";
import { ClassificationStyle } from "./styles";
import Hashtag from '../../assets/Hashtag.svg'
import AtSign from  '../../assets/AtSign.svg'
import UserCard from '../../assets/UserCard.svg'
import { Loading } from "../../components";
export default function Home() {
  const stg = localStorage.getItem('url')
  console.log(stg)
  const SPREADSHEET_ID = stg?.split('/')[5]
  const SHEET_ID = stg !== undefined && stg !== null ? stg.split('=')[1] : ''
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
      {rowData ? (
        <>
        <ClassificationStyle>
            <div className="boxFormat">

                <img
                className="profileImg"
                  alt="Imagem do perfil"
                  src={rowData["profile_image_url"]}
                  width="10%">
                </img>

                <div className="icons">
                    <img src={Hashtag.src} alt="Hashtag" />
                    <img src={AtSign.src} alt="Arroba" />
                    <img src={UserCard.src} alt="Cartão de Usuário" />
                </div>

                <div className="infos">
                    <div className="textInfos">
                        <p className="infoTitle">
                            ID do Usuário
                        </p>

                        <p className="userInfo">
                          {rowData["consumer_id"]}
                          
                        </p>
                    </div>

                    <div className="textInfos">
                        <p className="infoTitle">
                            Nome do Perfil
                        </p>

                        <p className="userInfo">
                          @{rowData["profile_name"]}
                        </p>
                    </div>

                    <div className="textInfos">
                        <p className="infoTitle">
                            Nome do Usuário
                        </p>

                        <p className="userInfo">
                          {rowData["user_name"]}
                        </p>
                    </div>
                </div>
            </div>
        <div id="dicas">
          <p id="txtEsq" className="txtDica">&lt; Aperte <strong>SETA PARA ESQUERDA</strong> para classificar como <strong>PESSOA FÍSICA</strong></p>
          <p id="txtDir" className="txtDica">&gt; Aperte <strong>SETA PARA DIREITA</strong> para classificar como <strong>PESSOA JURÍDICA</strong></p>
        </div>
        </ClassificationStyle>
        </>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
}