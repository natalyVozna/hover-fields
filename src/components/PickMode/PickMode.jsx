import { SelectCustom } from "../SelectCustom/SelectCustom";
import { ButtonStart, Container, SelectBox } from "./PickMode.styled";

export const PickMode = ({ data, setFieldSize, onStartAction, isStart }) => {
  return (
    <Container>
      <SelectBox>
        <SelectCustom
          options={data}
          onSendField={(size) => setFieldSize(size)}
        />

        <ButtonStart type="button" onClick={onStartAction}>
          {isStart ? "END" : "START"}
        </ButtonStart>
      </SelectBox>
    </Container>
  );
};
