import { useContext} from 'react'
import { AppContext } from './context/AppContext';
import { Header, Footer, Contact } from './ui'
import { navModalGsap } from './helpers/GSAP-animations/navModalGsap'
import { NavModal, ScrollTopBtn } from './ui';
import { AppRouter } from './router/AppRouter'
import { NeuralPlexus } from './components/three/NeuralPlexus'
import 'aos/dist/aos.css';
import './App.css'



export const App = () => {

  const { showScrollTopBtn, refScrollUp, navOpen, setNavOpen } = useContext(AppContext);

  const { handleNavModal } = navModalGsap(navOpen, setNavOpen);

  return (
    <>
      <NeuralPlexus />

      <div className="content-layer">
        <div ref={ refScrollUp }></div>
        <div className={`bg-layer ${navOpen ? 'bg-layer-active' : ''}`}></div>
        <NavModal handleNavModal={ handleNavModal } />
        <Header handleNavModal={ handleNavModal } />
        <main>
          <AppRouter />
        </main>
        <Contact />
        <Footer />
        <ScrollTopBtn
          customClass={`scroll-top ${showScrollTopBtn ? 'scroll-top-visible' : 'scroll-top-hidden'}`}
        />
      </div>
    </>
  )
}

export default App