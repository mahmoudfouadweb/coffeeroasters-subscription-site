import "./Button.css";

const Button = ({children}) => {
  return <button className="btn_primary">{children}</button>;
};

export default Button;
