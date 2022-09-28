import React from 'react';

const AppletsCard =  ({img,text}) => {


    return (

//figure this stuff out
        <div className="flex m-1">
            <div className="flex-auto rounded-xl ml-0 h-32 w-full bg-blue-400 mx-1 my-1">
                <h2 className="text-center text-white font-bold"
                    text={'Applets for your morning routine'}>{text}</h2>
                <img src={"https://placeimg.com/400/225/people"}>{img}</img>
            </div>

  //figure this out

        </div>

    );
};

export default AppletsCard;