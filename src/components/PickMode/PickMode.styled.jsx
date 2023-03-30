import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 30px;

  /* @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  } */
`;
export const RightCol = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 100%;
  gap: 30px;
`;
export const ButtonStart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  background-color: #0e65e8;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 6px;
  min-width: 100px;

  &:hover {
    opacity: 0.8;
  }
`;
export const SelectBox = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
