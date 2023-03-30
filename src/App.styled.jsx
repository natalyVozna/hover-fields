import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 40px;

  @media screen and (max-width: 480px) {
    padding: 50px 20px;
  }
`;
