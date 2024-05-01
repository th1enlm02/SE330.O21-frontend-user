import React, { useState } from 'react'
import styles from './MeetingTypeList.module.css'
import HomeCard from '../HomeCard/HomeCard'
import addMeeting from '../../assets/icons/add-meeting.svg'
import joinMeeting from '../../assets/icons/join-meeting.svg'
import schedule from '../../assets/icons/schedule.svg'
import recordings from '../../assets/icons/recordings.svg'
import { useNavigate } from 'react-router-dom'

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState([])
    let navigate = useNavigate();
    const handleClickRecordings = () => {
        navigate('/recordings');
    }

    return (
    <section className={styles.main_section}>
        <HomeCard 
        img={addMeeting}
        title="New Meeting"
        description="Start an instant meeting"
        className={styles.add_meeting}
        handleClick={() => setMeetingState('isInstantMeeting')}
        />
        <HomeCard 
        img={joinMeeting}
        title="Join Meeting"
        description="via invitation link"
        className={styles.join_meeting}
        handleClick={() => setMeetingState('isJoiningMeeting')}
        />
        <HomeCard 
        img={schedule}
        title="Schedule Meeting"
        description="Plan your meeting"
        className={styles.schedule}
        handleClick={() => setMeetingState('isScheduleMeeting')}
        />
        <HomeCard 
        img={recordings}
        title="View Recordings"
        description="Meeting Recordings"
        className={styles.recordings}
        handleClick={handleClickRecordings}
        />
    </section>
  )
}

export default MeetingTypeList
