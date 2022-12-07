import Error from '../../assets/Error.svg'
import { ErrorDiv } from './style'

export function Fail() {
    return(
        <>
        <ErrorDiv>
            <img src={Error.src} alt="Ícone de conclusão" id='image'/>
            <p id='mission'>Ops, parece que tem algo de errado!</p>
            <p id='txt'>Recarregue a Página.</p>
        </ErrorDiv>
        {localStorage.clear()}
        </>
    )
}