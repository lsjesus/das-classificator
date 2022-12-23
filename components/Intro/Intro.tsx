import { useState, useEffect, useRef } from "react";
import { InicialInput } from './styles';
import { Header } from "../../components";
import { Select } from "../../components/SelectButton/SelectButton";
import { Start } from './styles';

export default function Intro() {

    const inputReference = useRef<HTMLInputElement>(null)
    const submitReference = useRef<HTMLButtonElement>(null)

    const getLink = async () => {
        if (inputReference.current)
            localStorage.setItem('url', inputReference.current.value)
        localStorage.setItem('id', '2')
    }
    const showSelect = async () => {
       const a = document.getElementById('selectButton')
       if(a)
       a.style.display = 'unset'
    }


    return (
        <>  
            <Header></Header>
            <Start>
            <div className="start">
            <form action="./" onSubmit={(e) => { getLink() }}>
                <InicialInput>
                    <div className="boxFormat">
                        <p className='titleFormat'>Acessar Dados</p>
                        <label className='subTitleFormat' htmlFor='sheetURL'>Endereço da Fonte de Dados</label>
                        <input id='sheetURL' className="inputFormat" type='text' ref={inputReference} placeholder="Insira aqui o link da planilha"></input>
                        <button type="submit" className="buttonFormat">Confirmar</button>
                        <button className="buttonFormat" onClick={(e) => {e.preventDefault(), showSelect()}} ref={submitReference}>Alterar botões</button>
                    </div>
                </InicialInput>
            </form>
            <Select/>
            </div>
            </Start>
        </>
        )
}