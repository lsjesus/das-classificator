import { useState, useEffect, useRef } from "react";
import { InicialInput } from './styles';
import { Header } from "../../components";
export default function Intro() {
    const inputReference = useRef<HTMLInputElement>(null)
    const submitReference = useRef<HTMLButtonElement>(null)

    const getLink = async () => {
        if (inputReference.current)
            localStorage.setItem('url', inputReference.current.value)
        localStorage.setItem('id', '2')
    }
    const getSubmit = async () => {
        if (submitReference.current)
            sessionStorage.setItem('select', submitReference.current.value)
    }


    return (
        <>  
            <Header></Header>
            <form action="./" onSubmit={(e) => { getLink() }}>
                <InicialInput>
                    <div className="boxFormat">
                        <p className='titleFormat'>Acessar Dados</p>
                        <label className='subTitleFormat' htmlFor='sheetURL'>Endereço da Fonte de Dados</label>
                        <input id='sheetURL' className="inputFormat" type='text' ref={inputReference} placeholder="Insira aqui o link da planilha"></input>
                        <button type="submit" className="buttonFormat">Confirmar</button>
                        <button className="buttonFormat" onClick={(e) => {getSubmit()}} ref={submitReference}>Alterar botões</button>
                    </div>
                </InicialInput>
            </form>
        </>
        )
}