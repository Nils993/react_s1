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
import ParentCounter from "./components/lesson3/parent.js";
import InputForm from "./components/lesson3/form.js";
import Menu from "./components/lesson3/menu.js";
import HoverRating from "./components/lesson3/reiting.js";
import Student from "./components/lesson3/propTypse.js";
import GreetingProps from "./components/seminar3/Task1.js";
import MessagesList from "./components/seminar3/Task33.js";
import ThemeSwitcher from "./components/seminar3/button.js";
import TextDisplayForm from "./components/seminar3/task34.js";
import TemperatureConverter from "./components/hw3/hw3.js";
import TodoLis from "./components/hw3/hwTodoList.js";

function App() {
  return (
    <div className="App">
      <Greeting />
      {/* <Menu />
      <HoverRating />
      <Counter />
     
      <CurrentTime />
      <EventCard
        number="1"
        myEvent="Rjywth"
        myDate="24.05.24"
        place="Tobolsk"
      />
      <EventCard number="2" myEvent="dsfdrfgh" myDate="27.07.24" place="EKB" />
      <TextInput />
      <TodoList />
      <Timer />
      <Message message="Домашнее задание Семинар 1" />
      <CommentsList />
      <ParentCounter />
      <Student name="Pavel" age={30} isStudent={true} />
      <InputForm />
      <GreetingProps name="Alex" />
      <MessagesList />
      <ThemeSwitcher />
      <TextDisplayForm /> */}
      <TemperatureConverter />
      <TodoLis />
    </div>
  );
}

export default App;
