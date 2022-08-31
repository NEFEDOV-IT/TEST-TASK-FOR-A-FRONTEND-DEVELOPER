import React from 'react';
import './App.scss';
import PeopleList from "./pages/PeopleList/PeopleList";
import Sort from "./components/Sort/Sort";
import {Route, Routes} from "react-router-dom";
import PersonInfo from "./pages/PersonInfo/PersonInfo";

function App() {
    return (
        <div className="wrapper">
            <Sort/>
            <Routes>
                <Route path="/" element={<PeopleList/>}/>
                <Route path="/person/:id" element={<PersonInfo/>}/>
            </Routes>
        </div>
    )
};

export default App;
