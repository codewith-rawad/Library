import React, { useState } from "react";

function Section() {
  const [a, seta] = useState("");
  
  function handle(q) {
    seta(q);
   
  }

  return (
    <div className="section">
      <div className="drop1"
          >
        <a href="#">
        الكتب المضافة حديثا
        </a>
        
      </div>
      <div className="drop2" >
        <a href="#">
        المكتبة الرقمية 
        </a>
        
      </div>
      <div className="drop3" onMouseOver={() => handle("new3")}
          onMouseOut={() => handle("")}>
        <a href="#" >
         أقسام المكتبة 
        </a>
        <ul >
        <a className={a} href="/book"><li className={a}>الكتب الدراسية </li></a>
          <a className={a} href="/Acadimc1"><li className={a}>مشاريع التخرج</li></a>
         <a  className={a}href="/Acadimc2"><li className={a}> رسائل الماجستير</li></a> 
        </ul>
      </div>
    </div>
  );
}

export default Section;
