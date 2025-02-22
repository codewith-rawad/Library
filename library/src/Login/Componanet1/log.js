import React from "react";
function Log(){
return(

    <div className="center">
<div className="loglogo">
<img  className="ll" src="../images/loglogo.png"></img>

</div>
<div className="login">
<div className="in1">
<label  for="i1">اسم المستخدم</label>
<br></br>
<br></br>
<input id="i1" type="ُemail"  placeholder="ادخل  الاسم"></input></div>
<div className="in2">

<label  for="i2">كلمة السر</label>
<br></br>
<br></br>
<input id="i2" type="password" placeholder="ادخل الرمز السري"></input></div>

<a href="#">تسجيل الدخول</a>

</div>




    </div>
)




}
export default Log
