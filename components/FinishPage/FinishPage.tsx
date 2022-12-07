import Success from '../../assets/Success.svg'
import { FinishDiv } from './style'
import { Header } from '../index'

export function Finish() {
    return(
        <>
        <Header></Header>
        <FinishDiv>
            <img src={Success.src} alt="Ícone de conclusão" id='image'/>
            <p id='mission'>Missão Cumprida!</p>
            <p id='txt'>Você concluiu todas as avaliações disponíveis nesse projeto.</p>
        </FinishDiv>
        </>
    )
}