import "./Footer.css";
const Footer = (props) => {
  return (
    <footer className="site-footer">
      <p>{props.text}</p>
    </footer>
  );
};

export default Footer;
