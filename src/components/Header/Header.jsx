import Title from "./Title";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="site-header">
      <Title text={props.text} />
    </header>
  );
};

export default Header;
