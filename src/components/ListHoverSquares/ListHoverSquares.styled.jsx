import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 267px);
  overflow-y: auto;
`;
export const Title = styled.h1`
  color: #000;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const ListSquares = styled.ul`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 10px;
  margin: 0;
  padding: 0;
`;
export const ItemSquares = styled.li`
  display: flex;
  padding: 16px;
  background-color: rgb(235 242 161);
  border: 1px solid #cbd46b;
  color: #a09061;
  font-weight: 600;
  list-style: none;
  width: 100%;
  border-radius: 10px;
`;
