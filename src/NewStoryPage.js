import React, {useState} from 'react';

// <NewStoryPage story = { {title:'', story:''}  } />
// start: Components
const NewStoryPage = (props) => {
    const story = props.story ? props.story : {title: '', content: ''};

    // states (using Hooks)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // helper functions
    const addNewStory = async (story) => {

        const response = await fetch(' https://lwvndqplxamdaypxwptk.supabase.co/rest/v1/stories', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3dm5kcXBseGFtZGF5cHh3cHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDYyODksImV4cCI6MTk4MDEyMjI4OX0.9f9bLvBvmcfCNGLrHFXmY0nB6bAkUZTCPN0KHcaU6-I',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3dm5kcXBseGFtZGF5cHh3cHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ1NDYyODksImV4cCI6MTk4MDEyMjI4OX0.9f9bLvBvmcfCNGLrHFXmY0nB6bAkUZTCPN0KHcaU6-I'

            },

            body: JSON.stringify(story)
        });

        const result = await response.text();
        console.log(result);
        console.log('Added new story');
    };

    // handlers
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const newStory = {
            title: title, content: content, background_image: 'https://picsum.photos/200/200', author_id: 1
        };

        const submittedStory = await addNewStory(newStory);

        console.log(submittedStory);

        console.log('title:', title);
        console.log('content:', content);
    };
    const handleTitle = (event) => {
        // console.log(event.target.value);
        setTitle(event.target.value);
    };
    const handleContent = (event) => {
        setContent(event.target.value);
    };

    // JSX / View
    return (<div>
        <h2 className="text-4xl mb-10">Story</h2>

        <form onSubmit={handleFormSubmit}>
            <input type="text" className="border-2"
                   placeholder="Enter title"
                   value={title}
                   onChange={handleTitle}
            />
            <br/>
            <textarea cols="30" rows="10"
                      className="border-2"
                      placeholder="some content here"
                      value={content}
                      onChange={handleContent}
            >
                </textarea>

            <br/>
            <input type="submit" value="add new story" className="bg-green-500 px-4 py-2"/>
        </form>

        <div>content preview:</div>
        <hr/>
        <p className="text-4xl">{title}</p>
        <p className={'text-2xl'}>{content} </p>
    </div>);
};
// end; components

export default NewStoryPage;