import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './router/PrivateRoute';
import useAuthen from './hooks/useAuthen';

const Home = React.lazy(() => import('./modules/home/home'));
const Login = React.lazy(() => import('./modules/login/login'));

function App() {
  const authen = useAuthen();

  return (
    <div className="App">
      <Router>
        <div>
          <Suspense fallback={null}>
            <Switch>
              <Route path='/login' component={Login} />
              <PrivateRoute authen={authen} exact path='/' component={Home} />
              <PrivateRoute authen={authen} exact path='/home' component={Home} />
            </Switch>
          </Suspense>
        </div>
    </Router>
    </div>
  );
}

export default App;
