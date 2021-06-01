import React, { useState } from "react";
const Header = (props) => {
  const [userCode, setUserCode] = useState("");
  function changeHandle(e) {
    console.log(userCode);
    setUserCode(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
  }
  console.log(props.Data);
  return (
    <form onSubmit={submitHandle} className="header">
      <input type="text" value={userCode} onChange={changeHandle} />
      <input type="submit" value="translate" />
    </form>
  );
};
export default Header;
