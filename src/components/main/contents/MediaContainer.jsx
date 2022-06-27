import { GiConfirmed } from 'react-icons/gi'
import './media_container.css'

export const MediaContainer = () => {
    return (
        <div id="media_container">
            {[...Array(22)].map((item, i) => (
                <div className="media_items" key={i}>
                    <div className="thumbnail">
                        <img className="thm" src="https://cdn.pixabay.com/photo/2019/05/01/19/56/youtube-4171822_960_720.jpg" alt="" />
                    </div>
                    <div className="media_title">
                        <img className="youtuber_profile" src="https://cdn.pixabay.com/photo/2015/08/11/12/32/youtube-884381_960_720.png" alt="" />
                        <div className="content_name">
                            <p>Content name Lorem ipsum</p>
                        </div>
                    </div>
                    <div className="media_subtitle">
                        <p title="YouTuberName">YouTuberNAME <GiConfirmed style={{ opacity: "0.8" }} /></p>
                        <p>การดู 4.5 แสน ครั้ง</p>
                        <p>{i} ชั่วโมงที่ผ่านมา</p>
                    </div>
                </div>
            ))}
        </div>
    )
}