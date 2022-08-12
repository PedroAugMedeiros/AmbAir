import styled from 'styled-components';
import img from '../../icons/Kindle.jpg';

export const NavBarFoot = styled.div`
display: flex;
flex-direction: column;
margin: 0;
width: 100%;
border-radius: 0px;
background: #124185;
margin-top: 25%;

button {
  border: none;
  background: #124185;
}

div {
  display: flex;
flex-direction: row;
justify-content: space-between;
border: 1px solid #2283C3;
color: rgba(255, 255, 255, 1);
align-items: center;
padding: 5%;

h1 {
  margin: 0;
}
}
.firstDiv {
  padding-top: 12%;
}

.foursthDiv {
  display: flex;
  justify-content: space-around;
  flex-wrap: no-wrap;
  white-space: nowrap;
  font-size: 145%;

  .theChosen {
    color: #25B7EA;
  }
}

.fiverDiv {
display: flex;
flex-direction: column;

h4 {
  font-size: 79%;
  font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
line-height: 100%;
color: #FFFFFF;
}

h5 {
  font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
  font-size: 70%;
  color: rgba(255, 255, 255, 0.8);
opacity: 0.5;
}

}

.lastDiv {

  background: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}
`;
