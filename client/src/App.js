import "./app.css";
import Center from "./components/Center";
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import TopHosts from "./components/TopHosts";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main__container">
        <Sidebar />
        <Center />
        <TopHosts />
      </div>
    </div>
  );
}

export default App;
