import { useEffect, useState } from "react";
import { Cell } from "../SquareForm/SquareForm.styled";

export const CellItem = ({
  isStart,
  rowIndex,
  colIndex,
  addHoverSquares,
  fields,
}) => {
  const [width, setWidth] = useState(50);

  useEffect(() => {
    if (fields.length === 5) {
      setWidth(50);
    } else if (fields.length === 10) {
      setWidth(40);
    } else if (fields.length === 15) {
      setWidth(30);
    }
  }, [fields]);

  const handleChangeColor = (e) => {
    e.preventDefault();
    if (!isStart) {
      return;
    }
    if (e.target.style.backgroundColor === "rgb(255, 255, 255)") {
      e.target.style.backgroundColor = "rgb(14, 101, 232)";
    } else {
      e.target.style.backgroundColor = "rgb(255, 255, 255)";
    }
    addHoverSquares({ row: rowIndex, col: colIndex });
  };

  return (
    <Cell
      style={{ backgroundColor: "#fff", width: width, height: width }}
      onMouseOver={handleChangeColor}
    ></Cell>
  );
};
