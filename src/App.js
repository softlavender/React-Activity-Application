import { useState } from 'react';
import './App.css';
import Activity from "./components/Activity";


function App() {
  // variables/hooks
  let [activityNotice, setActivityNotice] = useState('Click the "Find Random Activity" button for an activity to do :)')
  const [myActivity, setMyActivity] = useState()
  console.log(myActivity);

  // functions
  // console.log(e.target.previousElementSibling);

  const getActivity = async (wantedActivityAPI, e) => {
    // +e.target.children[1].value !== 1 || +e.target.children[1].value !== 2 || +e.target.children[1].value !== 4

    if (e.target.children[1]) {
      let val = +e.target.children[1].value
      console.log(val !==1);
      if(val !== 1 || val !== 2 || val !== 3) {
        console.log('failed');
        setActivityNotice('Can only select 1, 2 or 4 participants')
        setMyActivity()
        console.log('failed');
        return
      }
    }

    // console.log(`${wantedActivityAPI + e.target.children[1].value}`);
    console.log(wantedActivityAPI);

    // const newActivityData = await fetch(e.target.children[1] ? `${wantedActivityAPI + '?participants=' + e.target.children[1].value}` : wantedActivityAPI)
    // const newActivity = await newActivityData.json()
    // setMyActivity(newActivity)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Inlämningsuppgift 2 - Activity
      </header>
      
      <main className="App-main">
        <button onClick={ e => getActivity('http://www.boredapi.com/api/activity/', e)}>Find Random Activity</button>

        <form onSubmit={e => e.preventDefault(getActivity('http://www.boredapi.com/api/activity', e))}>
          <label htmlFor='participants'>(Optional) Find random activity with 1, 2 or 4 participants</label>
          <input id='participants' type='number' name='participants' placeholder='1, 2 or 4' />
          <button>Ok</button>
        </form>

        <section id='activities'>
          {myActivity ? myActivity && <Activity {...myActivity}/> : <h1>{activityNotice}</h1>}
        </section>
      </main>
    </div>
  );
}

export default App;


// loadMore = async () => {
//   const { data } = await api.getAsync(this.nextUrl, null)
//   this.nextUrl = data.next_url
//   this.appendData(data)
// }
// api
// http://www.boredapi.com/api/activity/

// docs
// https://www.boredapi.com/documentation
