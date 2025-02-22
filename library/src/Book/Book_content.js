import React, { useState } from "react";

function BookContent() {
  const[m1,setm1]=useState("")
  
    const st5 = "search"; 
    

    return (

<div className="B1">

<div className="h1">اكتشف كتابك المثالي</div>
<div className="filters">
            <div className="filter">
                
                <select id="section">
                <option hidden>اختر قسمًا</option>
<option value="fiction">رواية</option>
<option value="non-fiction">غير روائي</option>
<option value="science">علوم</option>
<option value="history">تاريخ</option>
<option value="technology">تكنولوجيا</option>
</select>
</div>
<div className="filter">
    <select id="language">
        <option hidden>اختر اللغة</option>
        <option value="english">الإنجليزية</option>
        <option value="french">الفرنسية</option>
        <option value="spanish">الإسبانية</option>
        <option value="german">الألمانية</option>
    </select>
</div>


</div> 
< a className="search1" href="#" onClick={()=>setm1("now")}> ابحث</a>
<div className={`${st5} ${m1}`}>
<div className="s1">
<img src="../images/history_book.jpg"></img>
<a href="#">التفاصيل</a>

</div>
<div className="s2">
<img src="../images/science.webp"></img>
<a href="#">التفاصيل</a>
</div>




</div>
</div>

    )
}

export default BookContent;
