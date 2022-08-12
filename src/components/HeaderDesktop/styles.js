import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};


export const HeaderDesktop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 15VH;

.bb {
  width: 10%;
  background: #124185;
  height: 20VH;
  border-radius: 0px 15px 0px 0px;
  transform: rotate(-180deg);
  color: #124185;
}

.logoAndNav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;

  img {
    width: 80%;
  }

  .rigthTopDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
    padding: 1%;
    background: #F3951E;
    color: #FFFFFF;

    spam {
      font-family: 'Lato';
font-style: normal;
      color: white;
  }

    
img {
  width: 15%;
  margin-right: 5%;
  }
  }

  .imgDiv {
    width: 10%;
  }

  nav {
    display: flex;
    button {
      margin: 5%;
      font-size: 120%;
      border: none;
      background: white; 
      color: black;
    }
  }

  .navAndP {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  p {
    display: flex;
    align-items: center;
    font-size: 120%;
    margin: 0%;
  }

}

`;
