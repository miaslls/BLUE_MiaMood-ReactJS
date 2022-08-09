import "./App.css";

import Header from "./components/Header/Header";
import MoodList from "./components/MoodList/MoodList";

function App() {
  return (
    <div id="outer-container">
      <Header />
      <main>
        <MoodList />
        <section id="statistics"></section>
      </main>
    </div>
  );
}

export default App;
