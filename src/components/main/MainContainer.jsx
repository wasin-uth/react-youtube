import React from 'react'
import {MediaContainer} from './contents/MediaContainer'
import { Header } from './header/Header'

const MainContainer = () => {
    return (
        <div id="main_container">
            <Header />
            <MediaContainer />
        </div>
    )
}

export default MainContainer;