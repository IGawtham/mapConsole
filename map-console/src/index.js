import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
function Home() {

    //const [vType, setVType] = useState()
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const drawerToggleHandler = () => {
        setSideDrawerOpen(prev => {
            return {
                sideDrawerOpen: !prev.sideDrawerOpen
            };
        });
    };



    const backDropHandler = () => {
        setSideDrawerOpen(false);
    };

    let backDrop;

    if (sideDrawerOpen) {
        backDrop = <Backdrop clickBackdrop={backDropHandler} />;
    }
    return (
        <div style={{ height: "100%" }}>
            <Toolbar drawerClickHandler={drawerToggleHandler} />
            <SideDrawer show={sideDrawerOpen} />
            {backDrop}
            <main style={{ marginTop: "64px" }}>
                <App />

            </main>
        </div>
    );
}
ReactDOM.render(<Home />, document.getElementById('root'));

