import styled from 'styled-components'
import GlobalStyles from './assets/components/GlobalStyles'
import Header from './assets/components/Header'
import SideBar from './assets/components/SideBar'
import Banner from './assets/components/Banner'
import banner from './assets/banner.png'
import Galeria from './assets/components/Galeria'
import fotos from './fotos.json'
import { useEffect, useState } from 'react'
import ModalZoom from './assets/components/ModalZoom'
import Footer from './assets/components/Footer'

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height:100vh;
`
const AppContainer = styled.div`
width: 1280px;
max-width: 100%;
margin: 0 auto;
`
const MainContainer = styled.main`
display: flex;
gap: 24px;
`
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`


function App() {
  const [fotosGaleria, setFotos] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
  const [filtro, setFiltro] = useState("")
  const [tag, setTag] = useState(0)

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...foto,
        favorita: !foto.favorita
      })
    }
    setFotos(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotos(fotosFiltradas)
  }, [filtro, tag])

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Header filtro={filtro} setFiltro={setFiltro} />
          <MainContainer>
            <SideBar />
            <ContenidoGaleria>
              <Banner texto={"La galería más completa de fotos"} backgroundImage={banner} />
              <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)} fotos={fotosGaleria}
                alAlternarFavorito={alAlternarFavorito}
                setTag={setTag} />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito} />
        <Footer />
      </FondoGradiente>
    </>
  )
}

export default App
