import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};

export const SplitAparents = styled.div`
display: flex;
flex-direction: column;
margin: 0;
justify-content: space-evently;
align-items: flex-start;
border-radius: 0px;
width: 100%;

.bgBlue1 {
  width: 100%;
  background: rgb(18, 65, 133, 1);
  margin-bottom: 0%;
  border-radius: 0px 0px 7px 7px;
  ${media.desktop} {
    border-radius: 0px 10px 10px 10px;
  }
}
.div2 {
  ${media.desktop} {
    width:72%;
  margin: 4%;
  margin-top: 60%;
  position: absolute;
  margin-bottom: 0%;
  background: #F0F3F5;
  }
  width:90%;
  margin: 5%;
  margin-top: 90%;
  position: absolute;
  margin-bottom: 0%;
  background: #F0F3F5;
  h3 {
    font-size: 136%;
  }
}

.h3MS {
  width: 100%;
}
.div3 {
  width: 80%;
  margin-bottom: 0;
  margin: 5%;
}

.bgBlue2 {
  ${media.desktop} {
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 5%;
  }
  width: 100%;
  margin-bottom: 52%;
  border-radius: 0px 0px 10px 10px;

  h3, h2 {
    margin: 8%;
    ${media.desktop} {
      text-align: center;
    }
  }
  h2 {
    margin-top: 0%;
    font-size: 170%;
    line-height: 130%;
    letter-spacing: -0.03em;
    color: #FFFFFF;

  }
  h3 {
    font-size: 110%;
    margin-top: 12%;
    margin-bottom: 0%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.005em;
    color: #FFFFFF;
    opacity: 0.5;
  }

  img {
    margin: 5%;
    width: 90%;
  }
}
}

${media.desktop} {
  margin-left: 9.99%;
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  margin-top: 1%;
}
`;
