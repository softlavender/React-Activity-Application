import { useState } from 'react';
import './App.css';
import Activity from "./components/Activity";


function App() {
  const [myActivity, setMyActivity] = useState()

  const getActivity = async (wantedActivityAPI, e) => {
    const newActivityData = await fetch(e.target.value ? `${wantedActivityAPI + '?participants=' + e.target.value}` : wantedActivityAPI)
    const newActivity = await newActivityData.json()
    setMyActivity(newActivity)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inlämningsuppgift 2 - Activity</h1>
      </header>
      
      <main className="App-main">
        <section id='activities'>
          {myActivity ? myActivity && <Activity {...myActivity}/> : <h1>Click the "Find Activity" button for an random activity to do :)</h1>}
        </section>
        

        <div className='activity-controls'>
          <label htmlFor='random-activity'>Find an <span>Activity</span> with any amount of participants</label>
          <button id="random-activity" onClick={ e => getActivity('http://www.boredapi.com/api/activity/', e)}>
            find activity
          </button>
        </div>

        <div className='activity-controls specify-activity-participants'>
          <form onChange={e => e.preventDefault(getActivity('http://www.boredapi.com/api/activity', e))}>
            <label htmlFor='participants'>Find an <span>Activity</span> with 1, 2 or 4 participants</label>
            <select name="participants" id='participants'>
              {/* selected attributet ger ett varning i konsolen som jag inte kan lösa:
                    * Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
              */}
              <option selected disabled hidden>select participants</option>
              <option value='1'>one</option>
              <option value='2'>two</option>
              <option value='4'>four</option>
            </select>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;