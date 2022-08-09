import "./App.css";

import Header from "./components/Header/Header";
import MoodList from "./components/MoodList/MoodList";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <div id="outer-container">
      <Header />
      <main>
        <MoodList />
        <Statistics />
      </main>
    </div>
  );
}

export default App;
