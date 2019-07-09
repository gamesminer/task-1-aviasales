import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Storage from './pages/Storage/Storage';
import Loader from "./components/Loader/loader";
import Logo from "./components/Logo/logo";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <>
        <Loader loading={loading}/>
        <div className="App">

          <header className="App-header">
            <Logo/>
            <Link to='/'>Главная</Link>
          </header>

          <Route path="/" exact component={() => <Storage stopLoading={() => setLoading(false)}/>} />
        </div>
      </>
    </Router>
  );
};

export default App;
