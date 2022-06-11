import Register from './Register';
import Main from './Main';
import { Route, Switch } from "react-router-dom"
import { GlobalStyle } from './styles';

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/register" exact component={Register} />
      </Switch>
    </div>
  );
}

export default App;
