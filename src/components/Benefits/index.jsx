import * as S from './styles'
import BenefitsIcon from '../../icons/BenefitsIcon.png';
import EnvelopIcon from '../../icons/EnvelopeIcon.png';

function Benefits() {
  return (
    <S.Benefits>
      <h1>
        <b>Confira as vantagens do Multi Split.</b></h1>
      <div>
        <img alt='img' src={BenefitsIcon}></img>
        <h2>Economia de espaço externo</h2>
        <h3>Climatização de vários ambientes utilizando apenas 1 unidade externa.</h3>
      </div>
      <div>
        <img alt='img' src={BenefitsIcon}></img>
        <h2>Facilidade de manutenção</h2>
        <h3>A manutenção é simplificada por ter somente uma unidade externa</h3>
      </div>
      <div>
        <img alt='img' src={BenefitsIcon}></img>
        <h2>Simultaneidade</h2>
        <h3>Podemos utilizar uma capacidade maior de Btu no somatório das unidades internas do que a capacidade da unidade externa.</h3>
      </div>
      <div>
        <img alt='img' src={BenefitsIcon}></img>
        <h2>Versatilidade</h2>
        <h3>Escolha da capacidade e modelo da unidade evaporadora se ajustando à sua necessidade.</h3>
      </div>
      <div>
        <img alt='img' src={BenefitsIcon}></img>
        <h2>Economia de energia</h2>
        <h3>Fabricado apenas na tecnologia inverter, ele proporciona até 60% de redução no consumo de energia.</h3>
      </div>
      <img className='Envelop' alt='img' src={EnvelopIcon}></img>
    </S.Benefits>
  );
}

export default Benefits;
