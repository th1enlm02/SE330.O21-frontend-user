import '../styles/Home.css'
import MeetingTypeList from '../components/MeetingTypeList/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  
  return (
    <section class="home-section">
      <div class="home-div-1">
        <div class="home-div-2">
          <h2 class="home-div-2__h2">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div class="home-div-2__div">
            <h1 class="home-div__h1">
              {time}
            </h1>
            <p class="home-div__p">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default Home
