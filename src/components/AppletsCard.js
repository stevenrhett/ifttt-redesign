import React from 'react';
import {Link} from "react-router-dom";

const AppletsCard =  ({img,title,alt}) => {


    return (


        <div className="flex m-1">
            <div className="flex-auto rounded-xl ml-0 h-32 w-full bg-blue-400 mx-1 my-1">
                <h2 className="text-center text-white font-bold"
                    title={'Applets for your morning routine'}>{title}</h2>
                <img src={img} alt={alt}></img>
            </div>



        </div>

    );
};

export default AppletsCard;