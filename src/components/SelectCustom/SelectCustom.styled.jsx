import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  gap: 30px;
  position: relative;
  /* width: 10.5em;
  margin: 0 auto; */
`;

export const DropDownHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  border: 1px solid #000;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: #000;
  background: #ffffff;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  top: 37px;
  left: 0;
  width: 100%;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 1px solid #000;
  box-sizing: border-box;
  color: #000;
  font-weight: 400;
  font-size: 16px;
  &:first-child {
    padding-top: 8px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
