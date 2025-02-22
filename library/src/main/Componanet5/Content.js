import React from "react";
function Content() {
  return (
    <div className="group">
      <div className="book">
        <img src="../images/books.jpg"></img>
        <h3>الكتب</h3>
      </div>
      <div className="dic">
        <img src="../images/dictionry.jpg"></img>
        <h3>القواميس</h3>
      </div>
      <div className="mag">
        <img src="../images/magazin.jpg"></img>
        <h3>المجلات </h3>
      </div>
    </div>
  );
}
export default Content;
