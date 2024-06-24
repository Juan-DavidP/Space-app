import styled from "styled-components";
import Input from "../Input";

const HeaderEstilizado = styled.header`
padding: 60px 0 ;
display: flex;
justify-content: space-between;
img{
    width: 212px;
}
`

const Header = ({ filtro, setFiltro }) => {
    return <HeaderEstilizado>
        <img src="/img/logo.png" alt="Logo Space App" />
        <Input setFiltro={setFiltro} />
    </HeaderEstilizado>
}



export default Header