import React, { useState } from "react";
const Header = () => {
  const [userCode, setUserCode] = useState("");
  function changeHandle(e) {
    console.log(e.target.value);
    setUserCode(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandle} className="header">
      <input type="text" value={userCode} onChange={changeHandle} />
      <input type="submit" value="translate" />
    </form>
  );
};
export default Header;
