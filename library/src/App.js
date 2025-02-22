import React, { useState } from "react";
import Main from "./main/Main";
import Login from "./Login/login";
import Person from "./Person/Person";
import Book from "./Book/Book";
import Acadimc2 from "./Acadimc2/Acadimc2";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Type from "./Type/Type";
import Acadimc1 from "./Acadimc1/Acadimc1";
import About from "./About/About";


function App() {
    const [class1, setclass1] = useState("");
    const [class2, setclass2] = useState("");
    const [class4, setclass4] = useState("");

    function F1(class1) {
      
        setclass1(class1);
    }
    function F2(class2) {
        setclass2(class2);
    }
    
    function F4(class4) {
        setclass4(class4);
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Main F1={F1} F2={F2} F4={F4} />}
                />
                <Route path="/Main" element={<Type />} />
                <Route path="/login" element={<Login />} />
                <Route path="/book" element={<Book />} />
                <Route path="/Acadimc1" element={<Acadimc1 />} />
                <Route path="/Acadimc2" element={<Acadimc2 />} />
                <Route path="/About" element={<About />} />

                <Route
                    path="/profile"
                    element={
                        <Person
                            class1={class1}
                            class2={class2}
                            class4={class4}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
