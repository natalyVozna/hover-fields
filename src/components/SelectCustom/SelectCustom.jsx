import { useState } from "react";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./SelectCustom.styled";

import { GoTriangleDown } from "react-icons/go";

// const options = ["Mangoes", "Apples", "Oranges"];

export const SelectCustom = ({ options, onSendField }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value.name);
    setIsOpen(false);
    onSendField(value.field);
    console.log(selectedOption);
  };

  return (
    <DropDownContainer>
      <DropDownHeader>
        <GoTriangleDown onClick={toggling} />
        {selectedOption || "Pick mode"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={option.id}>
                {option.name}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};
