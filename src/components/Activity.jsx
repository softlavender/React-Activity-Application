const Activity = ({activity, participants, type}) => {
  
  return (
    <>
    <h1>{activity}</h1>
    <p>Activity: <span>{activity}</span></p>
    <p>Participants: <span>{participants}</span></p>
    <p>Type: <span>{type}</span></p>
    </>
  )
}

export default Activity