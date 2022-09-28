import React from 'react';
import MainTabNav from "./MainTabNav";
import Footer from "./Footer";
import AllCard from "./AllCard";
import AppletsCard from "./AppletsCard";
import ServicesCard from "./ServicesCard";
import StoriesCard from "./StoriesCard";


const MainContent = () => {
    return (
        <div className="w-1/2 mx-auto mt-12">
            <h2 className="text-center font-bold text-7xl">Explore</h2>
            <MainTabNav/>


        </div>
    );
};

export default MainContent;