import { useState, useEffect, useRef } from "react";
import { SelectDiv } from './style';

export var buttonPf: string|undefined|number
export var buttonPj: string|undefined|number

export function Select(){
    const inputReference1 = useRef<HTMLInputElement>(null)
    const inputReference2 = useRef<HTMLInputElement>(null)
    const submitReference = useRef<HTMLButtonElement>(null)
    const formReference = useRef<HTMLFormElement>(null)

    const getButton = async () => {
        if(inputReference1.current){
            buttonPf = inputReference1.current.value
            localStorage.setItem('buttonPf', buttonPf)
        }
        else{
            buttonPf = 'ArrowLeft'
            localStorage.setItem('buttonPf', buttonPf)
        }

        if(inputReference2.current){
            buttonPj = inputReference2.current.value
            localStorage.setItem('buttonPj', buttonPj)
        }
        else{
            buttonPj = 'ArrowRight'
            localStorage.setItem('buttonPj', buttonPj)
        }

            const a = document.getElementById('selectButton')
            if(a){
                a.style.display = 'none'
            }
    }

    return(
        <>
        <form id='selectButton' action="./" onSubmit={(e) => {e.preventDefault(), getButton() }} ref={formReference}>
        <SelectDiv>
            <div className="boxFormat">
                <p className="titleFormat"></p>
                <label className="subTitleFormat" htmlFor="button">Insira a seguir o botões para avaliação:</label>
                <input id="buttonPF" className="inputFormat" type="text" ref={inputReference1} placeholder="Botão PF (Padrão: Seta Esquerda)"/>
                <input id="buttonPJ" className="inputFormat" type="text" ref={inputReference2} placeholder="Botão PJ (Padrão: Seta Direita"/>
                <button type="submit" className="buttonFormat" ref={submitReference}>Confirmar</button>
            </div>
        </SelectDiv>
        </form>
        </>
    )
}
