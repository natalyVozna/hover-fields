import React, { useEffect, useState } from "react";
import { RowItem } from "../RowItem/RowItem";

export const SquareForm = ({ size, isStart, addHoverSquares }) => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(i);
    }
    setFields(arr);
  }, [size]);

  return (
    <>
      <table>
        {fields.map((row, index) => (
          <RowItem
            key={index}
            rowIndex={row}
            fields={fields}
            isStart={isStart}
            addHoverSquares={addHoverSquares}
          />
        ))}
      </table>
    </>
  );
};
