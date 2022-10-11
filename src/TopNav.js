import React from 'react';

const TopNav = () => {
    return (<div>
            <div className="navbar">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl font-bold">IFTTT</a>
                    <a className="btn bg-green-600 border-0 rounded-full text-black">Do more with your notes</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-center space-x-4 mr-3">
                        <a className="border-0 rounded-full text-black font-bold text-xl">My Applets</a>
                        <a className="border-0 rounded-full text-black font-bold text-xl">Explore</a>
                        <a className="border-0 rounded-full text-black font-bold text-xl">Developers</a>
                        <a className="btn py-2 px-6 border-4 bg-white rounded-full text-black">Upgrade</a>
                        <a className="btn py-2 px-6 border-4 border-gray-800 bg-gray-900 text-white rounded-full ">Create</a>
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people"/>
                            </div>
                        </label>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default TopNav;