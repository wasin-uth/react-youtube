import React, { useState } from 'react'
import {
    FirstGuide,
    MoreGuide,
    SecondGuide,
    TrackingGuide
} from './DataNavigation'
import './navigation.css'
import SimpleBarReact from 'simplebar-react'
import 'simplebar/src/simplebar.css'
import { MdExpandMore } from 'react-icons/md'

const Navigation = () => {
    const [firstGuide] = useState(FirstGuide);
    const [secondGuide] = useState(SecondGuide);
    const [trackingGuide] = useState(TrackingGuide);
    const [moreGuide] = useState(MoreGuide);

    return (
        <SimpleBarReact id="navigation">
            <ul className="guide">
                {firstGuide.map((item, i) => (
                    <li key={i} className={`items ${item.class}`}>
                        <div className="icon">{item.icon}</div>
                        <div className="name">{item.name}</div>
                    </li>
                ))}
            </ul>
            <ul className="guide">
                {secondGuide.map((item, i) => (
                    <li key={i} className={`items ${item.class}`}>
                        <div className="icon">{item.icon}</div>
                        <div className="name">{item.name}</div>
                    </li>
                ))}
            </ul>
            <ul className="guide">
                <li className="tracking_title">การติดตาม</li>
                {trackingGuide.map((item, i) => (
                    <li key={i} className={`items ${item.class}`}>
                        <div className="icon">
                            <img
                                className="youtuber"
                                src={item.profile}
                                alt={item.name}
                            />
                        </div>
                        <div className="name">{item.name}</div>
                    </li>
                ))}
                <li className='items'>
                    <div className="icon"><MdExpandMore size={22} /></div>
                    <div className="name">แสดงเพิ่มอีก</div>
                </li>
            </ul>
            <ul className="guide">
                {moreGuide.map((item, i) => (
                    <li key={i} className={`items ${item.class}`}>
                        <div className="icon">{item.icon}</div>
                        <div className="name">{item.name}</div>
                    </li>
                ))}
            </ul>
        </SimpleBarReact>
    )
}

export default Navigation;