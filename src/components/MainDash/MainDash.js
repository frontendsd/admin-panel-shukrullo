import React from 'react';
import './MainDash.css'
import Cards from "../cards/Cards";
import Table from "../Table/Table";


function MainDash() {
    return (
        <div className="mainDash">
            <h1>Dashboard</h1>
            <Cards/>
            <Table/>
        </div>
    );
}

export default MainDash;