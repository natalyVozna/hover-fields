import {
  Container,
  ItemSquares,
  ListSquares,
  Title,
} from "./ListHoverSquares.styled";

export const ListHoverSquares = ({ hoverSquares }) => {
  return (
    <Container>
      <Title>Hover squares</Title>
      <ListSquares>
        {hoverSquares.map(({ row, col }) => (
          <ItemSquares>
            <span>
              row: {row} col: {col}
            </span>
          </ItemSquares>
        ))}
      </ListSquares>
    </Container>
  );
};
