import React from 'react';

const AllCard = ({img,text,alt}) => {

    return (
//figure this stuff out
    <div className="card w-full bg-neutral text-neutral-content mx-0 my-2">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{text}</h2>
            <img src={"https://placeimg.com/400/225/people"} alt={alt}>{img}</img>
            <div className="card-actions justify-end">
                //figure this stuff out
            </div>
        </div>
    </div>



    );
};

export default AllCard;