import { useState, useEffect, useRef } from "react";
import { SelectDiv } from './style';



export function Select(){
   

    
    var buttonPf = ''
    var buttonPj = ''
    


    var hasEventPF = 0
    var hasEventPJ = 0

    const getButtonPF = async () => {
        var inputPF = document.querySelector('#buttonPF')
        console.log(buttonPF?.id)

        if (hasEventPF === 0){
              
            inputPF?.addEventListener('keydown', (e) => {
                hasEventPF = 1
                console.log("apertou botao")
                inputPF?.setAttribute('value', e.key.toUpperCase())
                console.log(e.key)
                if(e.keyCode == 13) {
                    e.preventDefault();
                    return false;
                  }
                buttonPf = e.key

            })
            console.log('criou event listener')
        }

        hasEventPF = 1

        


    }

    const getButtonPJ = async () => {
        var inputPJ = document.querySelector('#buttonPJ')
        console.log(buttonPJ?.id)

        if (hasEventPJ === 0){
              
            inputPJ?.addEventListener('keydown', (e) => {
                hasEventPJ = 1
                console.log("apertou botao")
                inputPJ?.setAttribute('value', e.key.toUpperCase())
                console.log(e.key)
                if(e.keyCode == 13) {
                    e.preventDefault();
                    return false;
                  }
                buttonPj = e.key

            })
            console.log('criou event listener')
        }

        hasEventPJ = 1

        


    }
   

    const confirmarButton = async () =>{
        
        if (buttonPf != 'ArrowLeft' || buttonPj != 'ArrowRight'){
            if (buttonPf != buttonPj){
                localStorage.setItem('buttonPf', buttonPf)  
                localStorage.setItem('buttonPj', buttonPj)
                localStorage.setItem('buttonPfName', buttonPf.toUpperCase())
                localStorage.setItem('buttonPjName', buttonPj.toUpperCase())
            }  

            else{
                window.alert('Erro: Os botões para avaliação devem ser distintos')
            }
        }

     }
    
     if (buttonPf === ''){
        buttonPf = 'ArrowLeft'
        localStorage.setItem('buttonPfName', 'Seta esquerda')
     }
    
     if (buttonPj === ''){
        buttonPf = 'ArrowRight'
        localStorage.setItem('buttonPjName', 'Seta direita')

     }


     const limparButton = async () =>{
        var inputPJ = document.querySelector('#buttonPJ')
        var inputPF = document.querySelector('#buttonPF')

        buttonPf = ''
        buttonPj = ''
        localStorage.setItem('buttonPf', buttonPf)  
        localStorage.setItem('buttonPj', buttonPj)
        localStorage.setItem('buttonPfName', buttonPf.toUpperCase())
        localStorage.setItem('buttonPjName', buttonPj.toUpperCase())

        inputPJ?.setAttribute('value', '')
        inputPF?.setAttribute('value', '')

     }

    return(
        <>
        <form id='selectButton' action="./" onSubmit={(e) => {e.preventDefault()}}>
        <SelectDiv>
            <div className="boxFormat">
                <p className="titleFormat"></p>
                <label className="subTitleFormat" htmlFor="button">Insira a seguir os botões para avaliação:</label>
                <input id="buttonPF" className="inputFormat" type="text" readonly = 'readonly' onClick = {getButtonPF} placeholder="Botão PF (Padrão: Seta Esquerda)"/>
                <input id="buttonPJ" className="inputFormat" type="text" readonly = 'readonly'  onClick = {getButtonPJ} placeholder="Botão PJ (Padrão: Seta Direita)"/>
                <button type="submit" className="buttonFormat" onClick={confirmarButton}>Confirmar</button>
                <button className="buttonFormat" onClick={(e) => {e.preventDefault(), limparButton()}}>Redefinir botões</button>
            </div>
        </SelectDiv>
        </form>
        </>
    )
}
