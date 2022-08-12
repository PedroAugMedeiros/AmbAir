import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};

export const CapacitsAndModels = styled.div`
display: flex;
flex-direction: column;
margin: 0;
justify-content: space-evently;
margin-left: 3%;
border-radius: 0px;


p {
  margin: 0%;
}

h1 {
  margin: 5%;
  line-height: 110%;
  color: #383838;
width: 299px;
height: 62px;
left: 25px;
font-family: 'Heebo';
font-style: normal;
font-weight: 500;
line-height: 110%;
font-family: 'Heebo';
font-style: normal;
font-weight: 500;
color: #383838;
}

h2, h3 {
  line-height: 120%;
  display: flex;
  align-items: center;
  width: 251px;
  height: 29px;
  left: 33px;
  top: 1238px;
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 500;
  color: #074675;
}

spam {
  font-family: 'Lato';
font-style: normal;
font-weight: 400;
line-height: 140%;
align-items: center;
letter-spacing: -0.005em;
color: #383838;
opacity: 0.7;
}

p {
  font-family: 'Lato';
font-style: normal;
font-weight: 700;
letter-spacing: -0.005em;
color: #383838;
opacity: 0.7;
}

.obs {
  margin: 0%;
  display: flex;
  align-items: flex-start;

  p {
    margin: 0;
    margin-top: 3px;
  }
}

div {
  ${media.desktop} {
    margin-bottom: 2%;
  }
  margin: 5%;
  margin-bottom: 20%;
  background: #FAFAFA;

  h2, h3, img, spam {
    padding: 2%;
  }

  spam {
    margin-top: 10%;
    font-size: 99%;
  }

   p {
    margin-top: 5%;
    padding-left: 2%;
  }

  h3 {
    font-size: 110%;
  }

}
${media.desktop} {
  margin-left: 10%;
  .desktopDiv {
    display: flex;
    justify-content: space-around;
   flex-direction: row; 
   {
    div {
    padding: 2%;

    img, h2, h3 {
      margin: 5%;
      padding: 2%;
    }
    }
   }
  }
  
}
`
export const ProductsImages = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 15%;

${media.desktop} {
  margin-left: 10%;
  margin-bottom: 0%;

    width: 80%;
    img {
      margin-left: 30%;
      width: 50%;
    }
}
.icon {
  margin-left: 70%;
  margin-top: 158%;
  position: absolute;
  width: 25%;
}
.lastImg {
  ${media.desktop} {
    margin-left: 40%;
      float: right;
      width: 50%;
      margin-top: 10%;
      transform: matrix(-1, 0, 0, 1, 0, 0);
      
  }
  margin-top: 25%;
}
`
