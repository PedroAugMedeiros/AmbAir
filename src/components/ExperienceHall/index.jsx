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
          <img src={AtivityIcon}></img>
          <h1>45 +</h1>
          <p>Anos de atividade e tradição</p>
        </div>
        <div className='product-release'>
          <img src={ProductReleaseIcon}></img>
          <h1>50.000 +</h1>
          <p>Instalações realizadas com sucesso.</p>
        </div>
      </div>
      <div className='firstIcons'>
        <img src={PetrobrasIcon} className='firstImg'></img>
        <img src={AmbevIcon} className='secondImg'></img>
        <img src={AplleIcon} className='thirdImg'></img>
      </div>
      <div className='secondIcons'>
        <div>
          <img src={FacebookIcon} className='firstImg'></img>
        </div>
        <div className='textLink'>
          <h2>
            Muitos outros.
          </h2>
          <a>
            Ver Portfólio
          </a>
        </div>
        <div>
          <img src={MultiplanIcon} className='thirdImg'></img>
        </div>
      </div>
      <img src={ProductIcon} className='ProductIcon'></img>
      <section>
        <h1>Confira os outros Serviços de Instalação da Ambientair</h1>
        <div>
          <img src={Duto}></img>
          <h2>Sistemas dutados</h2>
          <button type="button"> <img className='imgButton' src={buttonIcon} /></button>
        </div>
        <div>
          <img src={SAIcon}></img>
          <h2>Splits Aparentes</h2>
          <button type="button"> <img className='imgButton' src={buttonIcon} /></button>
        </div>
        <div>
          <img src={ProductReleaseIcon}></img>
          <h2>Contratos de manutenção (PMOC)</h2>
          <button type="button"> <img className='imgButton' src={buttonIcon} /></button>
        </div>
        <div>
          <img src={VRFIcon}></img>
          <h2>Sistemas VRF</h2>
          <button type="button"> <img className='imgButton' src={buttonIcon} /></button>
        </div>
      </section>
    </S.ExperienceHall>
  );
}

export default ExperienceHall;
