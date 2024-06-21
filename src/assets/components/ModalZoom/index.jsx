import styled from "styled-components"
import Imagen from "../Galeria/Imagen"
import BotonIcono from "../BotonIcono"

const OverLay = styled.div`
background-color: rgba(0,0,0, 0.7);
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
`
const DialogEstilizado = styled.dialog`
position: absolute;
top: 294px;
height: 1200px;
width: 720px;
padding: 0;
border: 0;
display: flex;
justify-content: center;
background: transparent;
form{
    button{
        position: relative;
        top: 20px;
        right: 60px;
    }
}
`

const ModalZoom = ({ foto, close }) => {
    return <>
        {foto && <>
            <OverLay />
            <DialogEstilizado open={!!foto}>
                <Imagen expandida={true} foto={foto} />
                <form method="dialog">
                    <BotonIcono>
                        <img src="/icons/cerrar.png" alt="Cerrar" onClick={() => {expandida = !expandida}} />
                    </BotonIcono>
                </form>
            </DialogEstilizado></>}
    </>

}


export default ModalZoom