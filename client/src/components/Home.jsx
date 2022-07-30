import "../app.css";
import Center from "./Center";
import Sidebar from "./Sidebar";
import TopHosts from "./TopHosts";
function App() {
  return (
    <div className="app">
      <div className="app__main__container">
        <Sidebar />
        <Center />
        <TopHosts />
      </div>
    </div>
  );
}

export default App;
