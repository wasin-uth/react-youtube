import React from 'react'
import { FiMenu } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io'
import { MdKeyboardVoice } from 'react-icons/md'
import { VscGitPullRequestCreate } from 'react-icons/vsc'
import { AiOutlineAppstore } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'
import './head.css'
import Profile from "./Profile.jpg"
import YouTubeLogo from "./YouTubeLogo.png"

const MastHead = () => {
    const iconSize = 22;

    return (
        <div id="mast_head">
            <div className="head_start">
                <div className="menu">
                    <FiMenu size={iconSize} />
                </div>
                <div className="brand" title="หน้าแรกของ YouTube">
                    <img className="logo" src={YouTubeLogo} alt="YoutubeLogo" />
                    <span><b>YouTube</b></span>
                </div>
                <div className="languages">TH</div>
            </div>
            <div className="head_center">
                <form className="form_search">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="ค้นหา"
                    />
                    <button type="submit" title="ค้นหา">
                        <IoIosSearch size={iconSize} />
                    </button>
                </form>
                <div className="voice_search" title="ค้นหาด้วยเสียง">
                    <MdKeyboardVoice size={iconSize} />
                </div>
            </div>
            <div className="head_end">
                <div className="create">
                    <VscGitPullRequestCreate size={iconSize} title="สร้าง" />
                </div>
                <div className="apps">
                    <AiOutlineAppstore size={28} title="แอป Youtube" />
                </div>
                <div className="notification">
                    <BsBell size={iconSize} title="การแจ้งเตือน" />
                </div>
                <div className="settings">
                    <img className="profile" src={Profile} alt="settings" />
                </div>
            </div>
        </div>
    )
}

export default MastHead;