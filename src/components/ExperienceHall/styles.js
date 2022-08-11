import styled from 'styled-components';

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
      width: 20%;
    }
  }
}

.firstIcons {
  display: flex;
  justify-content: space-between;
  margin-top: 15%;
}

.secondIcons {
  display: flex;
  justify-content: space-between;
  margin-top: 15%;
  align-items: center;
  img {
  width: 100%;
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
  width: 25%;
}

button {
  border: none;
}

section {
  margin-top: 10%;

  h1 {
    font-size: 150%;
    width: 70%;
  }
  div {
    width: 100%;
    margin-top: 15%;
    margin-left: 5%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h2 {
      width: 60%;
    }
    button {
      margin-right: 5%;
      padding: 0;
      width: 20%;
      padding-top: 15%;
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
`;
