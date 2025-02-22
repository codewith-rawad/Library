import React, { useState } from "react";

function List({ x, sr, updateClasses }) {
  const [a, setA] = useState("");
  const [b, setB] = useState(false);

  const handleClick = () => {
    if (x === "الإشعارات") {
      updateClasses("add1", "add2", "add4");
    } 
  };
  const handleClick2 = () => {
    if (sr ==="../images/not.png") {
      updateClasses("add1", "add2", "add4");
    } //else {
    //   updateClasses("", "", "");
    // }
  };
  var d;
  if (x === "من نحن؟" ) {
      d = "/About";
  } else {
      d = "#";
  }
  if(sr === "../images/about.png"){

d="/About";

  }
  

  return (
    <div>
      <a
        className="icon"
        href="#"
        onClick={() => {
          if (b === false) {
            setA("new1");
            setB(true);
          } else {
            setA("new2");
            setB(false);
          }
        }}
      >
        <img src="../images/icon.png" alt="icon" />
      </a>
      <div className={a}>
        <a href="/">
          <img className="one" src="../images/home.png" alt="home" />
        </a>
        <a href={d} onClick={handleClick2}>
          <img className="two" src={sr} alt="about" />
        </a>
        <a href="/profile">
          <img className="three" src="../images/contact.png" alt="contact" />
        </a>
      </div>

      <div className="next_list">
        <ul>
          <li><a href="/">الرئيسية</a></li>
          <li><a href="/profile">الملف الشخصي</a></li>
          <li>
            <a href={d} onClick={handleClick}>{x}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default List;
