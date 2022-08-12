import * as S from './styles'
import ProductReleaseIcon from '../../icons/ProductReleaseIcon.png';
import AtivityIcon from '../../icons/ativityIcon.png';
import PetrobrasIcon from '../../icons/petrobrasIcon.png';
import AmbevIcon from '../../icons/ambevIcon.png';
import AplleIcon from '../../icons/appleIcon.png';
import FacebookIcon from '../../icons/facebookExperienceIcon.png'
import MultiplanIcon from '../../icons/multiplanIcon.png';
import ProductIcon from '../../icons/ProductIcon.png';
import buttonIcon from '../../icons/buttonIcon.png';
import Duto from '../../icons/Duto.png';
import SAIcon from '../../icons/SAIcon.png'
import VRFIcon from '../../icons/VRFIcon.png';


function ExperienceHall() {
  return (
    <S.ExperienceHall>
      <h1>Experiência de mercado de quem sabe o que faz</h1>
      <div className='numbers'>
        <div className='ativity'>
          <img alt='img' className='Majors' src={AtivityIcon}></img>
          <h1>45 +</h1>
          <p>Anos de atividade e tradição</p>
        </div>
        <div className='product-release Majors' >
          <img alt='img' src={ProductReleaseIcon}></img>
          <h1>50.000 +</h1>
          <p>Instalações realizadas com sucesso.</p>
        </div>
      </div>
      <div className='firstIcons'>
        <img alt='img' src={PetrobrasIcon} className='firstImg'></img>
        <img alt='img' src={AmbevIcon} className='secondImg'></img>
        <img alt='img' src={AplleIcon} className='thirdImg'></img>
      </div>
      <div className='secondIcons'>
        <div>
          <img alt='img' src={FacebookIcon} className='firstImg'></img>
        </div>
        <div className='textLink'>
          <h2>
            Muitos outros.
          </h2>
          <p>
            Ver Portfólio
          </p>
        </div>
        <div>
          <img alt='img' src={MultiplanIcon} className='thirdImg'></img>
        </div>
      </div>
      <img alt='img' src={ProductIcon} className='ProductIcon'></img>
      <section>
        <h1>Confira os outros Serviços de Instalação da Ambientair</h1>
        <div>
          <img alt='img' src={Duto}></img>
          <h2>Sistemas dutados</h2>
          <button type="button"> <img className='imgButton' alt='img' src={buttonIcon} /></button>
        </div>
        <div>
          <img alt='img' src={SAIcon}></img>
          <h2>Splits Aparentes</h2>
          <button type="button"> <img className='imgButton' alt='img' src={buttonIcon} /></button>
        </div>
        <div>
          <img alt='img' src={ProductReleaseIcon}></img>
          <h2>Contratos de manutenção (PMOC)</h2>
          <button type="button"> <img className='imgButton' alt='img' src={buttonIcon} /></button>
        </div>
        <div>
          <img alt='img' src={VRFIcon}></img>
          <h2>Sistemas VRF</h2>
          <button type="button"> <img className='imgButton' alt='img' src={buttonIcon} /></button>
        </div>
      </section>
    </S.ExperienceHall>
  );
}

export default ExperienceHall;
