import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const HomeMain = styled.main`
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */

  margin: 0 auto;
`;

export const HomeFeatured = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;

  h1 {
    max-width: 30rem;
    font-size: 4rem;
    margin-left: 7rem;
  }
`;
