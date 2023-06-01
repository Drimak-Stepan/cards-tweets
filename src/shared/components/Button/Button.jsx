import { Btn } from "./Button.styles";

const Button = ({ children, onClick, type = "submit", ...props }) => {
  return (
    <Btn onClick={onClick} type={type} {...props}>
      <span>{children}</span>
    </Btn>
  );
};

export default Button;
