import React from 'react';
import Button from '../components/Button';
import confluencelogo from '../assets/image/logo/confluence-logo.png';
import jiralogo from '../assets/image/logo/jira-logo.png';

const MainPage = ({ addStep }) => {
    return (
        <>
            <div className="glass main-board">
                <h1>Scrum新手村</h1>
                <p>
                    嗨囉! 歡迎加入Burger資訊。
                    <br />
                    在正式加入專案開發之前，需要請你先了解Scrum的流程與精神。
                    <br />
                    請接受挑戰任務，成功通過Scrum新手村的挑戰任務吧。
                </p>
                <Button text={'接受挑戰'} addStep={addStep} />
                <div className="flex-center-row h-10">
                    <img src={confluencelogo} alt="confluence logo on screen" />
                    <img src={jiralogo} alt="jira logo on screen" />
                </div>
            </div>
        </>
    );
};

export default MainPage;
