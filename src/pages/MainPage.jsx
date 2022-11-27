import React from 'react';
import Button from '../components/Button';
import confluencelogo from '../assets/image/logo/confluence-logo.png';
import jiralogo from '../assets/image/logo/jira-logo.png';

const MainPage = ({ addStep,title,p1,p2,p3,btnText }) => {
    
    return (
        <>
            <div className="glass main-board">
                <h1>{title}</h1>
                <p>
                    {p1}
                    <br />
                    {p2}
                    <br />
                    {p3}
                </p>
                <Button text={btnText} addStep={addStep} />
                <div className="flex-center-row h-10">
                    <img src={confluencelogo} alt="confluence logo on screen" />
                    <img src={jiralogo} alt="jira logo on screen" />
                </div>
            </div>
        </>
    );
};

export default MainPage;
