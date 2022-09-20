import React from 'react';

const StoryCard = () => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl image-full m-4">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">4 unexpected ways to weatherproof your life</h2>
                </div>
            </div>
        </div>
    );
};

export default StoryCard;