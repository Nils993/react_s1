function Greeting() {
  const currentHour = new Date().getHours();
  const minut = new Date().getMinutes();

  let greeting;

  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Доброе утро";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Добрый день";
  } else if (currentHour >= 18 && currentHour < 24) {
    greeting = "Добрый вечер";
  } else {
    greeting = "Доброй ночи";
  }
  return (
    <div>
      <h1>Hello React</h1>
      <h3>
        {greeting} Время
        {currentHour}:{minut}
      </h3>
    </div>
  );
}

export default Greeting;
