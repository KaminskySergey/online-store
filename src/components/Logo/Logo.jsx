import {ReactComponent as CircleLogo} from '../../rubbish/circle-icon.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: inline-flex;
    align-items: center;
    font-size: 36px;
    border: 1px solid black;
    border-radius: 50%;
    padding: 14px 24px;
    height: 46px;
`

const S = styled.span`
    color: green;
`

const V = styled.span`
    color: #7513bf;
`

export const Logo = () => {
    return(<LogoContainer><CircleLogo width={48}/> <span className="font-link">nLine <S>S</S><V>t</V>ore</span></LogoContainer>)
}