import { useState, useEffect, useRef } from "react";
import { SelectDiv } from './style';
import { Header } from "../../components";

export var buttonPf: string|undefined|number
export var buttonPj: string|undefined|number

export function Select(){
    const inputReference = useRef<HTMLInputElement>(null)

    const getButton = async () => {
        if(inputReference.current)
            buttonPf = inputReference.current.value[0]
            buttonPj = inputReference.current?.value[1]
    }

    return(
        <>
        <Header></Header>
        <form action="./" onSubmit={(e) => { getButton() }}>
        <SelectDiv>
            <div className="boxFormat">
                <p className="titleFormat"></p>
                <label className="subTitleFormat" htmlFor="button">Insira a seguir o botões para avaliação</label>
                <input id="buttonPF" className="inputFormat" type="text" ref={inputReference} placeholder="Botão PF"/>
                <input id="buttonPJ" className="inputFormat" type="text" ref={inputReference} placeholder="Botão PJ"/>
                <button type="submit" className="buttonFormat">Confirmar</button>
            </div>
        </SelectDiv>
        </form>
        </>
    )
}
