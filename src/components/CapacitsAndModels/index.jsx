import * as S from './styles'
import CapacitsAndModelsIcon1 from '../../icons/CapacitsAndModelsIcon1.png';
import CapacitsAndModelsIcon2 from '../../icons/CapacitsAndModelsIcon2.png';
import TransitionBar from '../TransitionBar';
import ProductImg from '../../images/ProductImg.png'
import ProductImg2 from '../../images/ProductImg2.png';
import ProductIcon from '../../icons/ProductIcon.png';


function CapacitsAndModels() {
  return (
    <>
      <S.CapacitsAndModels>
        <h1>Capacidades
          e Modelos disponíveis</h1>
        <div>
          <img alt='img' src={CapacitsAndModelsIcon1}></img>
          <h2>Unidade Condensadora</h2>
          <h3>EXTERNA</h3>
          <spam>18.000 á 48.000 Btu</spam>
        </div>
        <div>
          <img alt='img' src={CapacitsAndModelsIcon2}></img>
          <h2>Unidade Evapadora</h2>
          <h3>INTERNA</h3>
          <p>Hi Wall</p>
          <spam>7.000 /9.000 / 12.000 / 18.000 / 24.000 Btu</spam>
          <br></br>
          <p>K7 4 vias</p>
          <spam>9.000 / 12.000 / 18.000 / 24.000 Btu</spam>
          <br></br>
          <p>K7 1 via</p>
          <spam>9.000 / 12.000 / 18.000 Btu</spam>
          <br></br>
          <p>Duto</p>
          <spam>9.000 / 12.000 / 18.000 Btu</spam>
        </div>
        <div className='obs'>
          <b>Obs.:</b><p>Há uma variação de capacidades e modelos existentes de acordo com o fabricante.</p>
        </div>
      </S.CapacitsAndModels>
      <S.ProductsImages>
        <TransitionBar />
        <img alt='img' src={ProductImg}></img>
        <TransitionBar />
        <img class='icon' alt='img' src={ProductIcon}></img>
        <img className='lastImg' alt='img' src={ProductImg2}></img>
      </S.ProductsImages>
    </>
  );
}

export default CapacitsAndModels;
