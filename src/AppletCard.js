import React from 'react';

const AppletCard = () => {
    return (

        <div className="flex m-1">
            <div className="flex-auto rounded-xl ml-0 h-32 w-full bg-blue-400 mx-1 my-1">
                <h2 className="text-center text-white font-bold">Cookies!</h2>
                <p className="text-center text-white">We are using cookies for no reason.</p>
            </div>
            <div className="flex-auto rounded-xl mr-0 h-32 w-full bg-pink-400 mx-1 my-1">
                <h2 className="text-center text-white font-bold">Cookies!</h2>
                <p className="text-center text-white">We are using cookies for no reason.</p>
            </div>


        </div>

    );
};

export default AppletCard;