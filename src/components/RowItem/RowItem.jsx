import { useState } from "react";
import { CellItem } from "../CellItem/CellItem";
import { RowStyle } from "../SquareForm/SquareForm.styled";

export const RowItem = ({ rowIndex, fields, isStart, addHoverSquares }) => {
  return (
    <RowStyle>
      {fields.map((col, index) => (
        <CellItem
          key={index}
          rowIndex={rowIndex}
          isStart={isStart}
          colIndex={col}
          fields={fields}
          addHoverSquares={addHoverSquares}
        ></CellItem>
      ))}
    </RowStyle>
  );
};
