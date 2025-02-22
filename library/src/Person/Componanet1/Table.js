import React from "react";

function Table({ class1, class2, class4,updateClasses }) {
    const st1 = "t1";
    const st2 = "t2"; 
    const st3 = "Table";
    const st4="notification";
    
  const handleClick = () => {
   
      updateClasses("", "", "");
    
  };

    return (
        <div className={`${st3} ${class2}`}>
       <div className={`${st4} ${class4}`}>
  <img className="notification-img" src="../images/not.png" alt="Notification" />
  <table className="notification-table">
    <tr>
      <td>one</td>
    </tr>
    <tr>
      <td>two</td>
    </tr>
  </table>
<a

href="#"onClick={handleClick} >  <img className="close-img" src="../images/close.png" alt="Close" /></a>
</div>

            <div className={`${st1} ${class1}`}>
                <img className="t1_logo" src="../images/think.png" alt="Logo" />
            </div>
            <div className={`${st2} ${class1}`}>
                <table>
                    <thead>
                        <tr>
                        <th>تاريخ الاستعارة</th>
<th>تاريخ الإرجاع</th>
<th>عنوان الكتاب</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023-10-01</td>
                            <td>2023-10-15</td>
                            <td>The Great Gatsby</td>
                        </tr>
                        <tr>
                            <td>2023-11-01</td>
                            <td>2023-11-15</td>
                            <td>Pride and Prejudice</td>
                        </tr>
                        <tr>
                            <td>2023-12-01</td>
                            <td>2023-12-15</td>
                            <td>1984</td>
                        </tr>
                        <tr>
                            <td>2024-01-01</td>
                            <td>2024-01-15</td>
                            <td>To Kill a Mockingbird</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
