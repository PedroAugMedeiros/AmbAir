import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};


export const Header = styled.div`
display: flex;
flex-direction: row;
margin: 0;
with: 100%;
border-radius: 0px;
justify-content: space-between;
margin: 5%;
background: #FFFFFF;

.AAIcon {
  margin-left: 3%;
  width: 30%;
}

button {
  border: none
}
}

${media.desktop} {
  margin-top: 2%;
}
`;

export const Menu = styled.div`
display: flex;
flex-direction: column;
margin: 0;
with: 100%;
border-radius: 0px;
justify-content: space-between;
margin: 5%;
background: #FFFFFF;
line-height: 25px;
color: #000000;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;

.close {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: 
  rgba(255, 255, 255, 1);
  padding: 5%;
  padding-right: 4%;
  padding-top: 1%;
  
  button { 
    background: white;
  }

  img {
    margin-left: 8%;
    width: 80%;
  }
}

img {
  margin-left: 8%;
  width: 50%;
}

button {
  border: none;
}
}

select {
  margin-left: 4.5%;
  border: none;
}
`;
