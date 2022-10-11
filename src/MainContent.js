import React from 'react';
import MainTabNav from "./MainTabNav";
import Footer from "./Footer";
import AllCard from "./AllCard";
import AppletCard from "./AppletCard";
import ServiceCard from "./ServiceCard";


const MainContent = () => {
    return (
        <div>
            <div className="w-1/2 mx-auto mt-12">
                <h2 className="text-center font-bold text-7xl">Explore</h2>
                <MainTabNav/>
                <AllCard/>

                <AppletCard/>

                <ServiceCard/>


                <Footer/>

            </div>
        </div>
    );
};

export default MainContent;