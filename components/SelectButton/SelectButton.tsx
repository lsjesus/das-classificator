import { useState, useEffect, useRef } from "react";
import { SelectDiv } from './style';

var buttonPf = 'ArrowLeft'
var buttonPj = 'ArrowRight'

export function Select(){
    const inputReference1 = useRef<HTMLInputElement>(null)
    const inputReference2 = useRef<HTMLInputElement>(null)
    const submitReference = useRef<HTMLButtonElement>(null)
    const formReference = useRef<HTMLFormElement>(null)

    const getButton = async () => {
        if(inputReference1.current?.value != undefined){
            buttonPf = inputReference1.current.value
            if(buttonPf != ''){
                localStorage.setItem('buttonPf', buttonPf)
                localStorage.setItem('buttonPfName', buttonPf)
            }
            else{
                buttonPf = 'ArrowLeft'
                localStorage.setItem('buttonPf', buttonPf)
                localStorage.setItem('buttonPfName', 'Seta Esquerda')
            }
        }
        

        if(inputReference2.current){
            buttonPj = inputReference2.current.value
            if(buttonPj != ''){
                localStorage.setItem('buttonPj', buttonPj)
                localStorage.setItem('buttonPjName', buttonPj)
            }
            else{
                buttonPj = 'ArrowRight'
                localStorage.setItem('buttonPj', buttonPj)
                localStorage.setItem('buttonPjName', 'Seta Direita')
            }
        }
       

            const a = document.getElementById('selectButton')
            if(a){
                a.style.display = 'none'
            }
    }

    const resetButtons = async () => {
        localStorage.setItem('buttonPf', 'Arrowleft')
        localStorage.setItem('buttonPj', 'ArrowRight')
        localStorage.setItem('buttonPfName', 'Seta Esquerda')
        localStorage.setItem('buttonPjName', 'Seta Direita')
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
                <label className="subTitleFormat" htmlFor="button">Insira a seguir os botões para avaliação:</label>
                <input id="buttonPF" className="inputFormat" type="text" ref={inputReference1} placeholder="Botão PF (Padrão: Seta Esquerda)"/>
                <input id="buttonPJ" className="inputFormat" type="text" ref={inputReference2} placeholder="Botão PJ (Padrão: Seta Direita"/>
                <button type="submit" className="buttonFormat" ref={submitReference}>Confirmar</button>
                <button className="buttonFormat" onClick={(e) => {e.preventDefault(), resetButtons()}}>Resetar Botões</button>
            </div>
        </SelectDiv>
        </form>
        </>
    )
}
