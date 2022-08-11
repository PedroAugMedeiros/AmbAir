import * as S from './styles';
import { useState } from 'react';
import AmbientAirIcon from '../../icons/ambientAir.svg';
import MenuIcon from '../../icons/Menu.png';
import AAIcon from '../../icons/ambientAir.svg';
import CloseMenu from '../../icons/CloseMenu.png'
import { Form } from 'react-bootstrap';

function Header() {

  const [showMenu, setShowMenu] = useState(false)

  const handleClick = (value) => {
    setShowMenu(value)
  };

  if (showMenu) {
    return (
      <S.Menu>
        <div className='close'>
          <button onClick={() => handleClick(false)}><img MenuIcon='MenuIcon' alt='img' src={CloseMenu}></img></button>
        </div>
        <img alt='img' src={AAIcon}></img>
        <Form.Select aria-label="Default select example">
          <option>Splits aparentes</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Multi Splits</option>
          <option value="1">Instalação</option>
          <option value="2">Produto</option>
          <option value="3">Valor</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Pressurização de escadas</option>
          <option value="1">Instalação</option>
          <option value="2">Produto</option>
          <option value="3">Valor</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Sistema dutado</option>
          <option value="1">Instalação</option>
          <option value="2">Produto</option>
          <option value="3">Valor</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Projetos de HVAC</option>
          <option value="1">Instalação</option>
          <option value="2">Produto</option>
          <option value="3">Valor</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Ventilação e Exaustão mecânica</option>
          <option value="1">Instalação</option>
          <option value="2">Produto</option>
          <option value="3">Valor</option>
        </Form.Select>
      </S.Menu>
    )
  }


  return (
    <S.Header>
      <img className='AAIcon' alt='img' src={AmbientAirIcon}></img>
      <button onClick={() => handleClick(true)}><img MenuIcon='MenuIcon' alt='img' src={MenuIcon}></img></button>
    </S.Header>
  );
}

export default Header;
