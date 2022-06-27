import React from 'react'
import MainContainer from './main/MainContainer';
import MastHead from './mast_head/MastHead';
import Navigation from './navigation/Navigation';
import './home.css'

const Home = () => {
    return (
        <div id="home">
            <MastHead />
            <div className="content_container">
                <div className="sidebar">
                    <Navigation />
                </div>
                <div className="main_container">
                    <MainContainer />
                </div>
            </div>
        </div>
    )
}

export default Home;