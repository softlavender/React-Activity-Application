const Activity = ({activity, participants, type}) => {
  console.log(activity);
  console.log(participants);
  console.log(type);
  // variables/hooks

  // render comp data
  return (
    <>
    <h1>Activity: {activity}</h1>
    <h2>Participants: {participants}</h2>
    <h3>Type: {type}</h3>
    </>
  )
}

export default Activity