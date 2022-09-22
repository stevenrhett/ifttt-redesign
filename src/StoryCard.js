import React from 'react';

const StoryCard = ({text, img, alt}) => {
    return (

        <div className="card w-full bg-base-100 shadow-xl image-full m-4">
            <figure><img src={img} alt={alt}/></figure>
            <div className="card-body">
                <h2 className="text-5xl text-center">{text}</h2>
            </div>
        </div>

    );
};

export default StoryCard;