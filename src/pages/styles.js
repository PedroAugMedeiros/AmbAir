import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 1000px)',
};

export const Home = styled.div`
position: relative;
height: 6509px;
overflow-y: scroll;
#E5E5E5;

.blueBlock {
  position: absolute;
  width: 3.5%;
  height: 0.8%;
  color: #124185;
  background: #124185;
border-radius: 0px 0px 0px 15px;
}

.divBottom {
  ${media.desktop} {
    margin-top: 10%;
}
  margin-top: 120%;
}

`;
