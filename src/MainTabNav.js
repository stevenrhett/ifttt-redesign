import React from 'react';
import StoryCard from "./StoryCard";

const MainTabNav = () => {
    return (<div>
        <div className="tab
           mt-10 w-full text-center p-1 font-bold">
            <a className="tab">All</a>
            <a className="tab">Applets</a>
            <a className="tab">Services</a>
            <a className="tab tab-active">Stories</a>
        </div>
        <div className="form-control mt-8">
            <div className="input-group">
                <button className="btn bg-gray-300 border-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>

                <input type="text" placeholder="Search Applets or services"
                       className="input input-bordered w-full bg-gray-300 border-0 focus:outline-none"/>


            </div>
        </div>

        <StoryCard text={"4 unexpected ways the weatherproof your life"} img={"https://placeimg.com/400/225/arch"}/>
        <StoryCard text={"Applets for your morning routine"} img={"https://placeimg.com/400/225/people"}/>
        <StoryCard text={"Guide to gaming automation"} img={"https://placeimg.com/400/225/arch"}/>
        <StoryCard text={"Getting started with gaming as a career"} img={"https://placeimg.com/400/225/people"}/>


    </div>);
};

export default MainTabNav;