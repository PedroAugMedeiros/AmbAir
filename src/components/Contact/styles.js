import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};

export const Contact = styled.div`
display: flex;
flex-direction: column;
border-radius: 0px;
justify-content: space-between;

h1 {
  font-family: 'Heebo';
font-style: normal;
font-weight: bold;
line-height: 130%;
letter-spacing: -0.03em;
color: #383838;
}

h3 {
  line-height: 140%;
  color: #000000;
  opacity: 0.8;
}
h1, h3 {
  margin: 5%;
}

}

${media.desktop} {
  margin-left: 5%;
  margin-top: 110%;

  img {
    margin-left: 10%;
    width: 50%;
  }

}
`;
