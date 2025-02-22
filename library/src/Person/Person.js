import React, { useState } from "react";
import Back from "../main/Componanet1/background";
import List from "../main/Componanet2/list";
import Behind from "../Type/Componanet1/behind";
import Footer from "../main/Component6/Footer";
import Table from "./Componanet1/Table";

function Person({ class1, class2, class4 }) {
   
    const [class1State, setClass1State] = useState(class1);
    const [class2State, setClass2State] = useState(class2);
    const [class4State, setClass4State] = useState(class4);

    const updateClasses = (newClass1, newClass2, newClass4) => {
        setClass1State(newClass1);
        setClass2State(newClass2);
        setClass4State(newClass4);
    };

    return (
        <div className="messi">
            <Back sr="../images/person.webp" />
            <List sr="../images/not.png" x="الإشعارات" updateClasses={updateClasses} />
            <Behind m="/" />
            <Footer />
            <Table class1={class1State} class2={class2State} class4={class4State}  updateClasses={updateClasses}/>
        </div>
    );
}

export default Person;
