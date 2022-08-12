import * as S from './styles'
import NavBarHead from '../components/NavBarHead';
import Header from '../components/Header';
import SplitAparents from '../components/SplitAparents';
import CapacitsAndModels from '../components/CapacitsAndModels';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import NavBarFoot from '../components/NavBarFoot';
import ExperienceHall from '../components/ExperienceHall';
import HeaderDesktop from '../components/HeaderDesktop';

function Home() {
  const largura = window.screen.width;

  if (largura > 999) {
    return (
      <S.Home>
        <div className='divTop'>
          <HeaderDesktop />
          <SplitAparents />
        </div>
        <div className='divBottom'>
          <CapacitsAndModels />
          <Benefits />
          <Contact />
          <ExperienceHall />
          <NavBarFoot />
        </div>
      </S.Home >
    )
  }

  return (
    <S.Home>
      <div className='divTop'>
        <NavBarHead />
        <Header />
        <SplitAparents />
      </div>
      <div className='divBottom'>
        <CapacitsAndModels />
        <Benefits />
        <Contact />
        <ExperienceHall />
        <NavBarFoot />
      </div>
    </S.Home >
  );
}

export default Home;
