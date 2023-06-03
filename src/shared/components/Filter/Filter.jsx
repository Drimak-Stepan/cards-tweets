import Checkbox from "../Checkbox";
import { FilterChose } from "./Filter.styles";

const Filter = ({
  filters = [],
  isSingleSelection = false,
  onChange,
  selectedOptions = [],
}) => {
  const handleChange = ({ option, checked }) => {
    console.log(checked);
    if (checked) {
      onChange(isSingleSelection ? [option] : [...selectedOptions, option]);
    } else {
      onChange(selectedOptions.filter((item) => item !== option));
    }
  };

  const isChecked = (value) => {
    console.log(value);
    return !!selectedOptions.find((item) => item === value);
  };

  return (
    <FilterChose>
      {filters.map(({ label, option }) => (
        <Checkbox
          key={option}
          option={option}
          label={label}
          checked={isChecked(option)}
          onChange={handleChange}
        ></Checkbox>
      ))}
    </FilterChose>
  );
};
export default Filter;
