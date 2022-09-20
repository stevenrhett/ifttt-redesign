import React from 'react';
import StoryCard from "./StoryCard";

const MainTabNav = () => {
    return (
        <div className="tab text-center
           mt-10 w-full  p-2 font-bold">
            <a className="tab">All</a>
            <a className="tab">Applets</a>
            <a className="tab">Services</a>
            <a className="tab">Stories</a>

            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>

            <StoryCard title="4 unexpected way to weatherproof your life"/>
            <StoryCard title="Applets for your morning routine"/>
            <StoryCard title="Guides for your gaming world"/>
            <StoryCard title="Getting started with gaming"/>


        </div>
    );
};

export default MainTabNav;