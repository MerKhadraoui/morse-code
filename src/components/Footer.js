const morseCode = require("morse-code-js");
const Footer = () => {
  const nume = "meriem";
  console.log(morseCode.morse(nume));
  return <div className="footer"> this is footer</div>;
};
export default Footer;
