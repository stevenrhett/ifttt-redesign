import React from 'react';
import MainTabNav from "./MainTabNav";
import StoryCard from "./StoryCard";
import Footer from "./Footer";

const MainContent = () => {
    return (
        <div>
            <div className="w-1/2 mx-auto mt-14">
                <h2 className="text-center text-5xl font-bold ">Explore</h2>
                <MainTabNav/>
                <StoryCard/>
                <Footer/>

            </div>

        </div>
    );
};

export default MainContent;