import { RiHome5Fill, RiVideoLine } from 'react-icons/ri'
import { IoNavigateCircleOutline, IoSettingsOutline } from 'react-icons/io5'
import {
    MdVideoLibrary,
    MdOndemandVideo,
    MdOutlineVideoLibrary,
    MdOutlinedFlag,
    MdOutlineSimCardAlert,
} from 'react-icons/md'
import { BsClockHistory } from 'react-icons/bs'
import {
    AiOutlineClockCircle,
    AiOutlineLike,
    AiOutlineQuestionCircle
} from 'react-icons/ai'
import Profile from './Profile.jpg'

const iconSize = 22;

export const FirstGuide = [
    { name: "หน้าแรก", class: "active", icon: <RiHome5Fill size={iconSize} /> },
    { name: "สำรวจ", icon: <IoNavigateCircleOutline size={iconSize} /> },
    { name: "Shorts", icon: <MdVideoLibrary size={iconSize} /> },
    { name: "การติดตาม", icon: <MdOndemandVideo size={iconSize} /> },
]

export const SecondGuide = [
    { name: "คลังวิดีโอ", icon: <MdOutlineVideoLibrary size={iconSize} /> },
    { name: "ประวัติการเข้าชม", icon: <BsClockHistory size={iconSize} /> },
    { name: "วิดีโอของคุณ", icon: <RiVideoLine size={iconSize} /> },
    { name: "ดูภายหลัง", icon: <AiOutlineClockCircle size={iconSize} /> },
    { name: "วิดีโอที่ชอบ", icon: <AiOutlineLike size={iconSize} /> },
]

export const TrackingGuide = [
    { name: "YOUTUBER", profile: Profile },
    { name: "YouTuber", profile: Profile },
    { name: "YOUTUBER", profile: Profile },
    { name: "YOUTUBER", profile: Profile },
    { name: "YouTuber", profile: Profile },
    { name: "YouTuber", profile: Profile },
]

export const MoreGuide = [
    { name: "การตั้งค่า", icon: <IoSettingsOutline size={iconSize} /> },
    { name: "ประวัติรายงาน", icon: <MdOutlinedFlag size={iconSize} /> },
    { name: "ความช่วยเหลือ", icon: <AiOutlineQuestionCircle size={iconSize} /> },
    { name: "ส่งความคิดเห็น", icon: <MdOutlineSimCardAlert size={iconSize} /> },
]