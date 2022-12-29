import { GoogleSpreadsheet, GoogleSpreadsheetRow, GoogleSpreadsheetWorksheet } from "google-spreadsheet";
import { useState, useEffect } from "react";
import { ClassificationStyle } from "./styles";
import Hashtag from '../../assets/Hashtag.svg'
import AtSign from '../../assets/AtSign.svg'
import UserCard from '../../assets/UserCard.svg'
import { Loading, Finish, Fail, Header } from "../../components";
import Image from "next/image";
import { loadComponents } from "next/dist/server/load-components";
export default function Home() {
  let stg = ''
  if (typeof window !== 'undefined') {
    const s = localStorage.getItem('url')
    if(s !== null){
      stg = s
    }
  }
  const SPREADSHEET_ID = stg?.split('/')[5]
  const SHEET_ID = stg !== undefined && stg !== null ? stg.split('=')[1] : ''
  const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL
    ? process.env.REACT_APP_GOOGLE_CLIENT_EMAIL
    : "";
  const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY
    ? process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY
    : "";
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  const [error, setError] = useState(Boolean);
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
    console.log(qrows.length)
    setSheet(sheet)
    setRows(qrows)
  };
  useEffect(() => {
    getSheet().catch((erro) => {
      setError(true)
    });
  }, [])
  useEffect(() => {
    if (!!rows && counter === 0 && rows.length > 0) {
      setCounter(5)
      const t = localStorage.getItem("id");
      getUser(t !== null ? JSON.parse(t) : 0);
      document.addEventListener("keydown", (e) => {
        if (e.key === localStorage.getItem('buttonPj')) {
          pJotinha("1");
        } else if (e.key === localStorage.getItem('buttonPf')) {
          pJotinha("0");
        }
          else if (e.key ==="Backspace"){
          returnCard();
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
    const start = Date.now()
    const t = localStorage.getItem("id");
    let stg = t !== null ? JSON.parse(t) : 0;
    try {
      if (sheet && stg < rows.length + 2) {
        const rCell = `E${stg}`;
        const cell = sheet.getCellByA1(rCell);
        cell.value = classification;
        sheet.saveUpdatedCells();
        setNum(stg + 1);
        getUser(stg + 1);
      }
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const returnCard = async() =>{
    let t = localStorage.getItem("id")
    if (t){
    let y = parseInt(t)
    if (y > 2){
      let stg = t !== null ? JSON.parse(t) : 0;
      try {
        if (sheet && stg < rows.length + 2) {
          const rCell = `E${stg}`;
          const cell = sheet.getCellByA1(rCell);
          setNum(stg - 1);
          getUser(stg - 1);
          alert("Retornou para o usuário anterior")
          
        }
      } catch (e) {
        console.error("Error: ", e);
      }
    }}
  };


  return (
    <div> {error === true ? ( (<Fail/>) ) :
      rowData ? (
        <>
        <Header></Header>
          <ClassificationStyle>
            <div className="boxFormat">

              <Image
              src={rowData["profile_image_url"]}
              alt='imagem do perfil'
              width={300}
              height={300}
              quality={50}
              priority
              />
              
              {/* <img
                className="profileImg"
                alt="Imagem do perfil"
                src={rowData["profile_image_url"]}
                width="10%"
              /> */}

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
              <p id="txtEsq" className="txtDica">&lt; Aperte <strong>${localStorage.getItem('buttonPfName')}</strong> para classificar como <strong>PESSOA FÍSICA</strong></p>
              <p id="txtDir" className="txtDica">Aperte <strong>${localStorage.getItem('buttonPjName')}</strong> para classificar como &gt; <strong>PESSOA JURÍDICA</strong></p>
            </div>
          </ClassificationStyle>
        </>
      ) : (rows.length && Number(localStorage.getItem('id')) <= Number(rows.length) + 2 )? (<Finish />) : (
        <Loading />
      )}
    </div>
  );
}