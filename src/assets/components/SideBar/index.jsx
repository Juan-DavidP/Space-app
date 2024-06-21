import styled from "styled-components"
import ItemNavegacion from "../ItemNavegacion"

const ListaEstilizada = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`

const SideBar = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacion iconoActivo="icons/home-activo.png" iconoInactivo="icos/home-inactivo.png" activo>
                        Inicio
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="icons/mas-vistas-activo.png" iconoInactivo="icons/mas-vistas-inactivo.png" >
                        Más visitados
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="icons/me-gusta-activo.png" iconoInactivo="icons/me-gusta-inactivo.png" >
                        Más Me gusta
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="icons/nuevas-activo.png" iconoInactivo="icons/nuevas-inactivo.png" >
                        Nuevas
                    </ItemNavegacion>
                    <ItemNavegacion iconoActivo="icons/sorprendeme-activo.png" iconoInactivo="icons/sorprendeme-inactivo.png" >
                        Sorpréndame
                    </ItemNavegacion>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}


export default SideBar