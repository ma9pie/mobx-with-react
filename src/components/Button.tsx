import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button style={{ width: 64, height: 32 }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
