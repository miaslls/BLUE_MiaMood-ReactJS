import "./App.css";

import Header from "./components/Header/Header";

function App() {
  return (
    <div id="outer-container">
      <Header />
      <main>
        <section id="mood-list"></section>
        <section id="statistics"></section>
      </main>
    </div>
  );
}

export default App;
