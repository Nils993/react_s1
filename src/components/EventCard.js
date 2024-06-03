function EventCard({ number, myEvent, myDate, place }) {
  return (
    <div className="event-card">
      <div>{number}</div>
      <div>{myDate}</div>
      <div>{place}</div>
      <div>{myEvent}</div>
    </div>
  );
}

export default EventCard;
