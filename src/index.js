import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/main/App';
import Restaurants from './pages/restaurants/index';
import reportWebVitals from './reportWebVitals';
import { Global } from './global';
ReactDOM.render(
    <React.StrictMode>
        <Global />
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/restaurantes" component={Restaurants} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
