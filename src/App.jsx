import "./App.styled.jsx";
import { Container } from "./App.styled.jsx";
import { GlobalStyle } from "./GlobalStyles";
import { Field } from "./components/Field/Field";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Field />
      </Container>
    </>
  );
}

export default App;
