import styled from 'styled-components';

export const SplitAparents = styled.div`
display: flex;
flex-direction: column;
margin: 0;
with: 100%;
heigth: 10vh;
justify-content: space-evently;
align-items: flex-start;
border-radius: 0px;
background: rgb(18, 65, 133, 1);
max-heigth: 10px;

h3 {
  margin-bottom: 0%;
  color: 
  rgba(255, 255, 255, 1);
  opacity: 0.5;
  font-family: 'Lato';
font-style: normal;
}

h3, h2 {
margin-left: 8%;
}

h2 {
  margin-top: 0%;
}

img, article {
  width: 90%;
  margin: 5%;
  margin-bottom: 0%;
}

article {
  background: white;
  color: black;
  margin-top: 0%;

  h3 {
    margin-bottom: 0%;
    color: 
    black;
    opacity: 1;
  }

  p {
    margin: 5%;
  }
}
`;
