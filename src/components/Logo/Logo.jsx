import { Link } from 'react-router-dom';
import {ReactComponent as CircleLogo} from '../../rubbish/circle-icon.svg';
import { LogoContainer, S, V } from './Logo.styled';


export const Logo = () => {
    return(
    <>
    <Link to='/' style={{textDecoration: 'none'}}>
    <LogoContainer>
        <CircleLogo width={48}/> 
        <span className="font-link">nLine <S>S</S><V>t</V>ore</span>
    </LogoContainer>
    </Link>
    </>
    )
}