import Success from '../../assets/Success.svg'
import { FinishDiv } from './style'

export function Finish() {
    return(
        <>
        <FinishDiv>
            <img src={Success.src} alt="Ícone de conclusão" id='image'/>
            <p id='mission'>Missão Cumprida!</p>
            <p id='txt'>Você concluiu todas as avaliações disponíveis nesse projeto.</p>
        </FinishDiv>
        </>
    )
}