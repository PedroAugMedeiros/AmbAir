import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};


export const ExperienceHall = styled.div`
display: flex;
flex-direction: column;
border-radius: 0px;
justify-content: space-between;
margin-top: 170%;

.numbers {
  margin-left: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  
  margin-top: 5%;
     
  div {
    display: flex;
    flex-direction: column;
    width: 50%;

    h1, h2 {
      font-size: 220%;
    }
  
    h1 {
      margin: 0;
    }

    img {
      ${media.desktop} {
      width: 10%;
      }
      width: 20%;
    }
  }
}

.firstIcons {
  display: flex;
  justify-content: space-between;
  margin-top: 15%;
  ${media.desktop} {
    margin-top: 5%;
  }
}

.secondIcons {
  display: flex;
  justify-content: space-between;
  margin-top: 15%;
  align-items: center;
  img {
  width: 100%;
  ${media.desktop} {
    width: 200%;
    margin-top: 0%;
  }
  }

  .textLink {
    display: flex;
    flex-direction: column;
    text-align: center;
      
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  h2 {
    margin-bottom: 0%;
  }
}

h1, h2 {
  margin-left: 5%;
}

.ProductIcon {
  margin-left: 65%;
  margin-top: 20%;
  width: 0%;
}

button {
  border: none;
}

section {
  ${media.desktop} {
    display: flex;
    flex-direction: column;
    font-size: 200%;
  }
  margin-top: 10%;

  h1 {
    font-size: 150%;
    width: 70%;
    ${media.desktop} {
      font-size: 200%;
    }
  }
  div {
    width: 100%;
    margin-top: 15%;
    margin-left: 5%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${media.desktop} {
      img {
        width: 10%;
      }
      font-size: 200%;
    }
    
    h2 {
      width: 60%;
    }
    button {
      margin-right: 5%;
      padding: 0%;
      width: 20%;
      margin-top: 15%;
      background: white;
    }
    .imgButton {
      align-self: flex-end;
       width: 70%;
      
      
    }

    h2 {
      font-size: 140%;
    }
  }
}
}

${media.desktop} {
  margin: 10%;

  .Majors {
    width: 10%;
  }
}
`;
