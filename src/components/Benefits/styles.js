import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};

export const Benefits = styled.div`
display: flex;
flex-direction: column;
border-radius: 0px;
justify-content: space-between;
margin: 5%;

${media.desktop} {
  width: 40%;
   position: absolute;
   margin-top: -25%;
   margin-left: 15%;
   background: white;

   img {
    width: 0%;
   }
}

img {
  margin-top: 10%;
  margin-bottom: 5%;
  width: 15%;
}

h1 {
  color: #383838;
  line-height: 110%;
  font-family: 'Heebo';
font-style: normal;
font-weight: 500;
font-size: 210%;
}

h2 {
font-family: 'Lato';
font-style: normal;
font-weight: bold;
line-height: 150%;
color: #000000;
}

h3 {
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
line-height: 150%;
color: #000000;
opacity: 0.7;
}

.Envelop {
  margin-top: 15%;
  width: 30%;
}

`;
