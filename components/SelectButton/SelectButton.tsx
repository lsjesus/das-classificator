import { useState, useEffect, useRef } from "react";
import { SelectDiv } from './style';
import { Header } from "../../components";

export var buttonPf: string|undefined|number
export var buttonPj: string|undefined|number

export function Select(){
    const inputReference1 = useRef<HTMLInputElement>(null)
    const inputReference2 = useRef<HTMLInputElement>(null)
    const submitReference = useRef<HTMLButtonElement>(null)

    const getButton = async () => {
        if(inputReference1.current){
            buttonPf = inputReference1.current.value
        }
        else{
            buttonPf = 'ArrowLeft'
        }

        if(inputReference2.current){
            buttonPj = inputReference2.current.value
        }
        else{
            buttonPj = 'ArrowRight'
        }

        if(submitReference.current)
        sessionStorage.setItem('backI', submitReference.current.value)
    }

    return(
        <>
        <Header></Header>
        <form action="./" onSubmit={(e) => { getButton() }}>
        <SelectDiv>
            <div className="boxFormat">
                <p className="titleFormat"></p>
                <label className="subTitleFormat" htmlFor="button">Insira a seguir o botões para avaliação:</label>
                <input id="buttonPF" className="inputFormat" type="text" ref={inputReference1} placeholder="Botão PF"/>
                <input id="buttonPJ" className="inputFormat" type="text" ref={inputReference2} placeholder="Botão PJ"/>
                <button type="submit" className="buttonFormat" ref={submitReference}>Confirmar</button>
            </div>
        </SelectDiv>
        </form>
        </>
    )
}
