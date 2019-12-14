
import React, { useState } from "react";
import "./Toolbar.css";
import DrawerToggle from "../SideDrawer/DrawerToggle";
import * as vehicleData from '../../vehicleData.json'
const Toolbar = props => {

    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className="toggle-toolbar-button">
                    <DrawerToggle click={props.drawerClickHandler} />
                </div>
                <div className="toolbar-logo">
                    <a>Map - Console</a>
                </div>
                <div className="spacer" />
                <div className="toolbar-navigation-items">
                    <ul class="list-group list-group-horizontal-xl" >
                        {
                            vehicleData.vehicleList.map(vehicle => (
                                <li key={vehicle.Id} className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                                    {vehicle.name}
                                    <span className={vehicle.badge}>{vehicle.count}</span>
                                </li>
                            ))
                        }
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </ul>

                </div>
            </nav>
        </header>
    );
};

export default Toolbar;