import "./App.css";
// Importe os componentes necessários do React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importe suas páginas
import Home from "./pages/home";
import Statistics from "./pages/statistics";
import Navbar from "./components/Navbar/Navbar";
import OccurrenceReport from "./components/OccurrenceReport/OccurrenceReport";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/occurrence-report" component={OccurrenceReport} />
          <Route path="/statistics" component={Statistics} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
