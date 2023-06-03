import icon from "../../../images/icons.svg";
import {
  CheckBoxContainer,
  CheckBoxItem,
  CheckBoxValue,
} from "./Checkbox.styles";

const Checkbox = ({ checked, option, label, onChange }) => {
  const onClick = () => {
    onChange({ option, checked: !checked });
  };
  return (
    <CheckBoxContainer onClick={onClick}>
      <CheckBoxItem>
        {checked ? (
          <svg>
            <use href={`${icon}#check`}></use>
          </svg>
        ) : (
          <svg>
            <use href={`${icon}#uncheck`}></use>
          </svg>
        )}
      </CheckBoxItem>
      <CheckBoxValue> {label} </CheckBoxValue>
    </CheckBoxContainer>
  );
};
export default Checkbox;
