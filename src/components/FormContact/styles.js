import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};


export const FormContact = styled.div`
width: 90%;
margin: 5%;
margin-top: 123%;
padding: 5%;
position: absolute;
margin-bottom: 0%;
background: white;

button {
  background: #124185;
  border-radius: 5px;
}

}

${media.desktop} {
  width: 30%;
  position: absolute;
  margin-left: 40%;
  margin-top: 20%;

  img {
    margin-left: 10%;
    width: 50%;
  }


`;
