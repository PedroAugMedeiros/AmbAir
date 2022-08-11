import * as S from './styles'
import InstalationImg from '../../images/InstalationImg.png';
import FormContact from '../FormContact';

function Contact() {
  return (
    <S.Contact>
      <h1>Quer saber mais sobre
        Multi Splits?</h1>
      <h3>Preencha o formulário  com suas dúvidas que a nossa equipe irá retornar o mais rápido possível.</h3>
      <img alt='img' src={InstalationImg} ></img>
      <FormContact />
    </S.Contact>
  );
}

export default Contact;
