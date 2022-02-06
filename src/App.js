import { useState } from 'react';
import './App.css';
import Activity from "./components/Activity";


function App() {
  const [myActivity, setMyActivity] = useState()

  const getActivity = async (wantedEndpoint, e) => {
    const endpointVal = Array.from(e.target.children[0].children[1].childNodes).find(x => x.selected)
    
    const newActivityData = await fetch(endpointVal.value > 0 ? `${wantedEndpoint + '?participants=' + endpointVal.value}` : wantedEndpoint)
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
          {myActivity ? myActivity && <Activity {...myActivity}/> : <h1>Click the <span>"Find Activity"</span> button for an random activity :)</h1>}
        </section>
        

        <form id='activity-controls' onSubmit={e => e.preventDefault(getActivity('http://www.boredapi.com/api/activity', e))}>
          <div id='select-participants'>
            <label htmlFor='participants'>Find an Activity with 1, 2 or 4 participants <span>(Optional)</span></label>
            <select name="participants" id='participants'>
              <option value='random'>Random participants</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='4'>4</option>
            </select>
          </div>
          
          <div id='select-random-activity'>
            <label htmlFor='random-activity'></label>
            <button id="random-activity">find activity</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;