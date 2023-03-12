import "./app.scss";
import { Home } from "./containers/home/home";
import { PageContainer } from "./containers/pageContainer/pageContainer";

function App() {
  return (
    <div className="app" role="app">
      <Home />
      <PageContainer />
    </div>
  );
}

export default App;
