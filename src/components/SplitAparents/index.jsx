import * as S from './styles'
import SplitAparents from '../../images/SplitAparents.png';

function SplitParents() {
  return (

    <S.SplitAparents>
      <div className='firstDiv'></div>
      <h3> Instalação </h3>
      <h2>Split Aparents</h2>
      <img src={SplitAparents}></img>
      <article>
        <h3>O que é Multi Split Inverter</h3>
        <p> O ar condicionado Multi Split consiste em uma unidade externa para duas ou mais unidades internas, possibilitando o controle de temperatura individual em cada ambiente. Além da escolha do modelo e capacidade, conforme sua necessidade. Na prática, é possível fazer a climatização em vários ambientes com apenas uma unidade condensadora.
          Atualmente, o sistema Multi Split é fabricado apenas com tecnologia Inverter, proporcionando menor consumo de energia. Além disso, ele trabalha com a simultaneidade e não é preciso que a condensadora atenda a capacidade máxima de todas as evaporadoras. Por exemplo, uma condensadora de 48.000 Btu pode ser conectada em até 72.000 Btu no somatório das evaporadoras.</p>
      </article>


    </S.SplitAparents>

    //
    //<h1></h1>
    //<img></img>
    //<h2></h2>
    //<img></img>
    //<h2></h2>
  );
}

export default SplitParents;
