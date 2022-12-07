import { HeaderContainer } from "./style"
import Logo from '../../assets/Logo.svg'
export function Header() {
    return (
        <HeaderContainer>
            <img id="logoImg" src={Logo.src} alt="Foster" />
        </HeaderContainer>
    )
}