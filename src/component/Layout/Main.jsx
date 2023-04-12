import React from 'react';
import Header from '../Header/Header';
import {Outlet} from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* ekhane header common ,
            ar jegular path change hobe tara outlet er moddhe thakbe */}
            <Outlet></Outlet>


        </div>
    );
};

export default Main;