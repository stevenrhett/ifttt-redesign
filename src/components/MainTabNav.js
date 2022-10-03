import React, {useState} from 'react';
import ServicesCard from './ServicesCard';
import AllCard from './AllCard';
import AppletsCard from './AppletsCard';
import StoriesList from './StoriesList';
import StoryCard from "./StoryCard";

const stories = [{title: 'Second one'}, {title: '3rd one'}];

const MainTabNav = () => {
    const [showAllCard, setShowAllCard] = useState(false);
    const [showAppletsCard, setShowAppletsCard] = useState(false);
    const [showServicesCard, setShowServicesCard] = useState(false);
    const [showStoriesCard, setShowStoriesCard] = useState(true);

    const handleShowAllCard = () => {
        setShowAllCard(true);

        setShowStoriesCard(false);
        setShowServicesCard(false);
        setShowAppletsCard(false);
    };
    const handleShowAppletsCard = () => {

        setShowAppletsCard(true);

        setShowServicesCard(false);
        setShowStoriesCard(false);
        setShowAllCard(false);
    };

    const handleShowServicesCard = () => {

        setShowServicesCard(true);

        setShowStoriesCard(false);
        setShowAllCard(false);
        setShowAppletsCard(false);
    };
    const handleShowStories = () => {

        setShowStoriesCard(true);

        setShowAllCard(false);
        setShowServicesCard(false);
        setShowAppletsCard(false);
    };





    return (
        <div>
            {/* start: The tabbed navigation */}
            <div className="mt-10 w-full text-center justify-items-center space-x-4">
                <a className={showAllCard  && 'tab tab-active : tab' } onClick={handleShowAllCard}>All</a>
                <a className={showAppletsCard  && 'tab tab-active'} onClick={handleShowAppletsCard}>Applets</a>
                <a className={showServicesCard && 'tab tab-active'} onClick={handleShowServicesCard}>Services</a>
                <a className={showStoriesCard && 'tab tab-active'} onClick={handleShowStories}>Stories</a>
            </div>
            {/* start: The tabbed navigation */}

            {/* START: Search form */}
            <div className="form-control m-8">
                <div className="input-group ">
                    <button className="btn bg-gray-300 border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                    <input id="search" className="input input-bordered w-full bg-gray-300 border-0 focus:outline-none" type="text"
                           placeholder="Search Applets or services" maxLength="1024" autoComplete="off"
                           aria-label="search"/>


                </div>
            </div>
            {/* END: search form*/}

            {/*START: Story blocks */}

            <StoryCard title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
                       img={"www.google.com"}/>
               <StoryCard title={ Math.floor (Math.random() * 10000) }/>
            {
                ['Hello', 'Buy', 'Give', 3,4,5,].map(num => <h3>{num}</h3>)
            }
            {
                ['Hello', 'Buy', 'Give', 3,4,5,].map(num => <StoryCard title={num}/>)

            }
            {
                stories.map(num => <StoryCard title={num.title}/>)
            }

            {/* START: Content Cards*/}
            {
                showAllCard && <AllCard/>
            }

            {
                showAppletsCard && <AppletsCard/>
            }
            {
                showServicesCard && <ServicesCard/>
            }
            {
                showStoriesCard && <StoriesList/>
            }

            {/*    END: Content Card*/}

        </div>
    );
};

export default MainTabNav;