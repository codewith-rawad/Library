import React ,{useState} from "react";
function Ac1(){
    const[m1,setm1]=useState("")
  
    const st5 = "search"; 
return(


    <div className="B1">

<div className="h1">ابحث عن رسالة الماجستير</div>
<div className="filters">
    <div className="filter">
        <input type="text" id="studentName" placeholder="أدخل اسم الطالب" />
    </div>

    <div className="filter">
        <select id="graduationYear">
            <option hidden>اختر سنة التخرج</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
    </div>

    <div className="filter">
        <input type="text" id="projectTitle" placeholder="أدخل عنوان الرسالة" />
    </div>

    <div className="filter">
        <select id="major">
        <option hidden>اختر التخصص</option>
            <option value="computerScience">النظم المعلوماتية</option>
            <option value="electricalEngineering">الاتصالات</option>
            <option value="mechanicalEngineering">النظم الالكترونية</option>
            <option value="businessAdministration">الميكاترونيكس</option>
            <option value="science">علم المواد</option>
            
        </select>
    </div>

    <div className="filter">
        <input type="text" id="supervisorName" placeholder="أدخل اسم المشرف" />
    </div>





</div> 
< a className="search2" href="#" onClick={()=>setm1("now")}> ابحث</a>
<div className={`${st5} ${m1}`}>
<div className="s1">
<img src="../images/history_book.jpg"></img>
<a href="#">التفاصيل</a>

</div>




</div>
</div>

    )
}

export default Ac1