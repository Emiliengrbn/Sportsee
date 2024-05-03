import { useState, useEffect } from "react";

import Header from "./components/Header.jsx"
import Sidebar from "./components/Sidebar.jsx"
import DailyActivity from "./components/DailyActivity.jsx";
import Nutrients from "./components/Nutrients.jsx";
import SessionsTime from "./components/SessionsTime.jsx";
import { MockService } from "./data/MockService.js"; // eslint-disable-line no-unused-vars
import { APIService } from "./data/APIService.js";
import Performances from "./components/Performances.jsx";
import Score from "./components/Score.jsx";


function App() {
  const [userData, setUserData] = useState(null)
  const [activityData, setActivityData] = useState(null)
  const [sessionsData, setSessionsData] = useState(null)
  const [performanceData, setPerformanceData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const service = new APIService(12)
      try {
        const [user, activity, sessions, performance] = await Promise.all([
          service.getUser(),
          service.getUserActivity(),
          service.getUserAverageSession(),
          service.getUserPerformance()
        ]);
        setUserData(user);
        setActivityData(activity);
        setSessionsData(sessions);
        setPerformanceData(performance);
      } catch(error) {
        setError(error)
      }
    }
    fetchData()
  }, [])

  if(error) {
    return <div>Une erreur est survenue : {error.message}</div>
  }

  if(!userData || !activityData || !sessionsData || !performanceData) {
    return <div>Chargement en cours...</div>
  }

  return (
  <div className="App">
    <Header/>

    <main>
      <Sidebar/>

      <div className="main-section">

        <section className="title-section">
          <h1 className="title">Bonjour <span className="name">{userData.userInfos.firstName}</span></h1>
          <p className="description">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>

        <div className="dashboard">
          <section className="charts-section">
              <div className="daily_activity">
                <DailyActivity data={activityData} />
              </div>
              <div className="small_charts-container">
                <div className="small_chart sessions_time">
                  <SessionsTime data={sessionsData}/>
                </div>
                <div className="small_chart performances">
                  <Performances data={performanceData}/>
                </div>
                <div className="small_chart score">
                  <Score data={userData}/>
                </div>
              </div>
          </section>
          <Nutrients data={userData}/>
        </div>
      </div>

    </main>

  </div>
  )
}

export default App;
