import * as S from './styles'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import AmbientAirIcon from '../../icons/ambientAir.svg';
import CartIcon from '../../icons/CartIcon.png';


function HeaderDesktop() {

  return (
    <>

      <S.HeaderDesktop>
        <div className='bb'>xdxdxd</div>
        <div className='logoAndNav'>
          <div className='imgDiv'>
            <img src={AmbientAirIcon}></img>
          </div>
          <nav>
            <DropdownButton id="dropdown-item-button" title="Instalações">
              <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" title="Manutenção">
              <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-item-button" title="Dropdown button">
              <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </nav>
          <p>Portifólio</p>
          <p>Contato</p>
          <div className='rigthTopDiv'>
            <img alt='img' src={CartIcon}></img>
            <spam>Acessar Loja</spam>
          </div>
        </div>
      </S.HeaderDesktop>
    </>
  )
}

export default HeaderDesktop;
