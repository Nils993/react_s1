import "./App.css";
import "./components/Greeting.js";
import Greeting from "./components/Greeting.js";
import CurrentTime from "./components/CurrentTime.js";
import EventCard from "./components/EventCard.js";
import Message from "./components/Message.js";
import Counter from "./seminar2/Counter.js";
import TextInput from "./seminar2/TextInput.js";
import TodoList from "./seminar2/TodoList.js";
import Timer from "./seminar2/Timer.js";

import CommentsList from "./hw2/CommentsList.js";

function App() {
  return (
    <div className="App">
      {/* <Counter />
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

      <TextInput />
      <TodoList />
      <Timer /> */}
      <CommentsList />
    </div>
  );
}

export default App;
