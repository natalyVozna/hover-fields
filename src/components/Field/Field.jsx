import { useCallback, useEffect, useState } from "react";
import { getDataApi } from "../../services/api-servise";
import { Container, RightCol } from "./Field.styled";
import { useFetch } from "../../hooks/useFetch";
import { PickMode } from "../PickMode/PickMode";
import { SquareForm } from "../SquareForm/SquareForm";
import { ListHoverSquares } from "../ListHoverSquares/ListHoverSquares";
// import PickMode from "../PickMode/PickMode";

export const Field = () => {
  const [data, setData] = useState([]);
  const [fieldSize, setFieldSize] = useState(5);
  const [width, setWidth] = useState(300);
  const [isStart, setIsStart] = useState(false);
  const [hoverSquares, setHoverSquares] = useState([]);

  const getData = useCallback(async () => {
    const data = await getDataApi();
    setData(data);
  }, []);

  useEffect(() => {
    if (fieldSize === 5) {
      setWidth(300);
    } else if (fieldSize === 10) {
      setWidth(400);
    } else if (fieldSize === 15) {
      setWidth(500);
    }
  }, [fieldSize]);

  const [fetchData, isLoading, isError] = useFetch(getData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onStartAction = (event) => {
    setIsStart(!isStart);
  };

  const addHoverSquares = (data) => {
    setHoverSquares((prevState) => {
      if (prevState.length) {
        return [data, ...prevState];
      } else {
        return [data];
      }
    });
  };

  return (
    <Container>
      <RightCol style={{ width: width }}>
        {data.length && (
          <PickMode
            onStartAction={onStartAction}
            data={data}
            setFieldSize={setFieldSize}
            isStart={isStart}
          />
        )}
        <SquareForm
          size={fieldSize}
          isStart={isStart}
          addHoverSquares={(data) => addHoverSquares(data)}
        />
      </RightCol>
      <ListHoverSquares hoverSquares={hoverSquares} />
    </Container>
  );
};
