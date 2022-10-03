import React from 'react';

const AllCard = ({img,stories,alt}) => {

    return (

    <div className="card w-full bg-neutral text-neutral-content mx-0 my-2">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{stories}</h2>
            <img src={img} alt={alt}>{img}</img>
            <div className="card-actions justify-end">

            </div>
        </div>
    </div>



    );
};

export default AllCard;