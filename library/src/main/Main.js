import React from "react";
import Back from "./Componanet1/background";
import List from "./Componanet2/list";
import Text from "./Componanet3/Text";
import Submit from "./Componanet4/Submit";
import Content from "./Componanet5/Content";
import Footer from "./Component6/Footer";

function Main({ F1, F2, F4 }) {
    
    
    return (
        <div className="all">
            <List
                sr="../images/about.png"
                x=" من نحن؟" 
                F1={F1}
                F2={F2}
            
                F4={F4}
              
            />
            <Back sr="../images/bac.jpeg" />
            <Text />
            <Submit />
            <Content />
            <Footer />
        </div>
    );
}

export default Main;
