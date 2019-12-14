import React from "react";
import "./SideDrawer.css";
import * as vehicleData from '../../vehicleData.json'
const SideDrawer = props => {
    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    }
    return (
        <nav className={drawerClasses}>

            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="list-group ">

                {
                    vehicleData.vehicleList.map(vehicle => (
                        <li key={vehicle.Id} className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                            {vehicle.name}
                            <span className={vehicle.badge}>{vehicle.count}</span>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default SideDrawer;