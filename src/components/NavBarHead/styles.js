import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};

export const NavBarHead = styled.div`
display: flex;
flex-direction: column;
margin: 0;
with: 100%;
justify-content: space-evently;
margin-left: 3%;
border-radius: 0px;



.topDiv {
  display: flex;
  flex-direction: row;


    .leftTopDiv {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 55%;
      padding: 3%;

      
  img {
    width: 40%;
    margin-right: 2%;
    }
    }
    
    .rigthTopDiv {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 45%;
      background: #F3951E;
      color: #FFFFFF;

      spam {
        font-family: 'Lato';
font-style: normal;
        color: white;
    }

      
  img {
    width: 13%;
    margin-right: 5%;
    }
    }
    
    p {
      margin-right: 5%;
      margin-bottom: 0%;
    left: 3.89%;
    right: 73.33%;
    top: 11.76%;
    bottom: 63.53%;
    font-size: 80%;
    opacity: 0.9;
    color: #000000;
    font-weight: 400;
    font-family: 'Lato';
    font-style: normal;
    }
}

.botDiv {
  display: flex;
  flex-direction: row;
  margin-top: 3%;
  align-items: center;
  margin-bottom: 0%;
  font-size: 103%;

  .leftBotDiv {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 55%;

    p {
      margin-bottom: 0%;
    left: 3.89%;
    right: 73.33%;
    top: 11.76%;
    bottom: 63.53%;
    font-size: 80%;
    opacity: 0.9;
    color: #000000;
    font-weight: 400;
    font-family: 'Lato';
    font-style: normal;
    }
  }

  .rigthBotDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 55%;

    p {
      margin-bottom: 0%;
    left: 3.89%;
    right: 73.33%;
    top: 11.76%;
    bottom: 63.53%;
    font-size: 80%;
    opacity: 0.9;
    color: #000000;
    font-weight: 400;
    font-family: 'Lato';
    font-style: normal;
    }
  }

  img {
    width: 10%;
    margin-right: 3%;
    stroke: solid;
  }
}

${media.desktop} {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin-bottom: 100%;
}

`;
