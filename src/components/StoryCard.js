import React from 'react';

const StoryCard = (props) => {
 //const props = {title: "the title", img: "path2 img" }
    // const {title} = props
    // console.log(title)
    //const{title,img,alt} = props
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full m-4">
           <figure><img src={props.img} alt={props.alt}/></figure>
            <div className="card-body">
                <h2 className="text-5xl text-center">{props.title}</h2>
                <small className='uppercase'>{props.id}</small>
            </div>
        </div>

    );
};
export default StoryCard;