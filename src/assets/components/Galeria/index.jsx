import styled from "styled-components"
import Titulo from "../Titulo"
import Tag from "./Tags"
import Imagen from "./Imagen"
import Populares from "./FotosPopulares"

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionImagenes = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], alSeleccionarFoto }) => {

    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionImagenes>
                    <Titulo>Navegue por la galería</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => <Imagen
                            alSolicitarZoom={alSeleccionarFoto}
                            key={foto.id}
                            foto={foto} />)
                        }
                    </ImagenesContainer>
                </SeccionImagenes>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria