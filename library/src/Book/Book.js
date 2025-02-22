import React from "react";
import Behind from "../Type/Componanet1/behind";
import List from "../main/Componanet2/list";
import Back from "../main/Componanet1/background";
import BookContent from "./Book_content";
import Footer from "../main/Component6/Footer";
function Book(){
    return(

<div>
<Back 
sr="../images/book.jpg"


/>

<Behind m="/main" />
<BookContent />
<List sr="../images/about.png"
x="من نحن؟"/>
<Footer />




</div>


    )
}
export  default Book