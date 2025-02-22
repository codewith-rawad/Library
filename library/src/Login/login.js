import React from "react";
import Back from "../main/Componanet1/background";
import List from "../main/Componanet2/list";
import Behind from "../Type/Componanet1/behind";
import Log from "./Componanet1/log";
import Footer from "../main/Component6/Footer";
function Login(){

return(
<div>
<Back sr="../images/book_login.jpg" />

<List sr="../images/about.png" 
x="من نحن؟"/>
 <Log />

<Behind m="/"/>
<Footer />
</div>


)



}
export default Login