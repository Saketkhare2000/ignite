import React, {useEffect} from 'react';
import Home from './pages/Home';
import GlobalStyles from './components/GlobalStyles';
import {Route} from 'react-router-dom';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* when route says / i wanna or game:id i want to rendere the home components */}
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
