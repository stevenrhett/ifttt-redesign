import React from 'react';

const TopNav = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <div className="flex-none">
                        <a className="btn btn-ghost normal-case text-3xl tracking-wider">IFTTT</a>
                    </div>
                    <button className="text-black btn rounded-full bg-green-500">Do more with your notes</button>
                </div>


                <div className="flex-none">
                    <div className="text-center text-bold dropdown dropdown-end space-x-2">
                        <a className="border-0 rounded-full font-bold text-black">
                            My Applets</a>
                        <a className="border-0 rounded-full font-bold text-black">
                            Explore</a>
                        <a className="border-0 rounded-full font-bold text-black">
                            Developers</a>
                        <button className="btn border-0 rounded-full text-black">
                            Upgrade</button>
                        <button className="btn border-0 rounded-full text-black">
                            Create</button>
                    </div>
                </div>



                <div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default TopNav;