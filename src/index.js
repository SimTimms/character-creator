import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyCharEmbed from './views/MyCharEmbed';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route path="/creator" component={App} />
        <Route
          path="/my-hero-master-embed/:id"
          render={props => <MyCharEmbed {...props} />}
        />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
