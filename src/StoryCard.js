import React from 'react';

    const StoryCard = ({id, backgroundImage, title}) => {

        return (
            <div className="card w-full bg-base-100 shadow-xl image-full m-4">
                <figure><img src=""/></figure>
                <figure><img src={backgroundImage}/></figure>
                <div className="card-body">
                    <h2 className="text-5xl text-center">{title}</h2>
                    <small className='uppercase'>{id}</small>
                </div>
            </div>

        );
    };
    export default StoryCard;