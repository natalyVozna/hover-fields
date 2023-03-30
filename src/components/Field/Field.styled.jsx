import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 100%;
  gap: 30px;
`;
