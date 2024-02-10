import "./App.css";
// Importe os componentes necessários do React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importe suas páginas
import Home from "./Pages/Home";
import Statistics from "./Pages/Statistics";
import Navbar from "./Components/Navbar/Navbar";
import OccurrenceReport from "./Components/OccurrenceReport/OccurrenceReport";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Adicione um cabeçalho comum, rodapé ou layout aqui, se necessário */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/occurrence-report" component={OccurrenceReport} />
          <Route path="/statistics" component={Statistics} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
