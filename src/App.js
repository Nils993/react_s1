import "./App.css";
import "./components/Greeting.js";
import Greeting from "./components/Greeting.js";
import CurrentTime from "./components/CurrentTime.js";
import EventCard from "./components/EventCard.js";
import Message from "./components/Message.js";

function App() {
  return (
    <div className="App">
      <Greeting />
      <CurrentTime />
      <EventCard
        number="1"
        myEvent="Rjywth"
        myDate="24.05.24"
        place="Tobolsk"
      />
      <EventCard number="2" myEvent="dsfdrfgh" myDate="27.07.24" place="EKB" />

      <Message message="Домашнее задание Семинар 1" />
    </div>
  );
}

export default App;
