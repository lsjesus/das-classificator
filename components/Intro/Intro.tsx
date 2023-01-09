import { useState, useEffect, useRef } from "react";
import { InicialInput } from './styles';
import { Header } from "../../components";
import { Select } from "../../components";
import { Start } from './styles';

export default function Intro() {

    const inputReference = useRef<HTMLInputElement>(null)
    const submitReference = useRef<HTMLButtonElement>(null)

    const getLink = async () => {
        if (inputReference.current)
            localStorage.setItem('url', inputReference.current.value)
        localStorage.setItem('id', '2')

        // if(!localStorage.getItem('buttonPf')){
        //     localStorage.setItem('buttonPf', 'ArrowLeft')
        //     localStorage.setItem('buttonPfName', 'Seta Esquerda')
        // }

        // if(!localStorage.getItem('buttonPj')){
        //     localStorage.setItem('buttonPj', 'ArrowRight')
        //     localStorage.setItem('buttonPjName', 'Seta Direita')
        // }

    
    }
    const showSelect = async () => {
        const a = document.getElementById('selectButton')
        if(a){
         a.style.display = 'unset'
         a.style.width = 'unset'
         a.style.paddingRight = 'unset'
        }
 
        const b = document.getElementById('data')
        if(b){
         b.style.paddingLeft = 'unset'
         b.style.alignItems = 'unset'
         b.style.justifyContent = 'unset'
        }
 
        const c = document.getElementById('not-visible')
        if(c)
        c.style.display = 'none'
    }


    return (
        <>  
            <Header></Header>
            <Start>
                <form id="data" action="./" onSubmit={(e) => { getLink() }}>
                    <InicialInput>
                    <div className="boxFormat">
                            <p className='titleFormat'>Acessar Dados</p>
                            <label className='subTitleFormat' htmlFor='sheetURL'>Endereço da Fonte de Dados</label>
                            <input id='sheetURL' className="inputFormat" type='text' ref={inputReference} placeholder="Insira aqui o link da planilha"></input>
                            <button type="submit" className="buttonFormat">Confirmar</button>
                            <button id='not-visible' className="buttonFormat" onClick={(e) => {e.preventDefault(), showSelect()}} ref={submitReference}>Alterar botões</button>
                        </div>
                    </InicialInput>
                </form>
                <Select></Select>
            </Start>
        </>
        )
}
