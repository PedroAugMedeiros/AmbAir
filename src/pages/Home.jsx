import * as S from './styles'
import NavBarHead from '../components/NavBarHead';
import Header from '../components/Header';
import SplitAparents from '../components/SplitAparents';
import CapacitsAndModels from '../components/CapacitsAndModels';
import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import NavBarFoot from '../components/NavBarFoot';

function Home() {
  return (
    <S.Home>
      <NavBarHead />
      <Header />
      <SplitAparents />
      <CapacitsAndModels />
      <Benefits />
      <Contact />
      <NavBarFoot />
    </S.Home>

  );
}

export default Home;
