import { useState, useEffect, useRef } from "react";
import { InicialInput } from './styles';
export default function Intro() {
    const inputReference = useRef<HTMLInputElement>(null)

    const getLink = async () => {
        if (inputReference.current)
            localStorage.setItem('url', inputReference.current.value)
        localStorage.setItem('id', '2')
    }

    return (
        <form action="./" onSubmit={(e) => { getLink() }}>
            <InicialInput>
                <div className="boxFormat">
                    <p className='titleFormat'>Acessar Dados</p>
                    <label className='subTitleFormat' htmlFor='sheetURL'>Endereço da Fonte de Dados</label>
                    <input id='sheetURL' className="inputFormat" type='text' ref={inputReference} placeholder="Insira aqui o link da planilha"></input>
                    <button type="submit" className="buttonFormat">Confirmar</button>
                </div>
            </InicialInput>
        </form>
    )
}