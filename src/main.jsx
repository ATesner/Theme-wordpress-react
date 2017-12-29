import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import Navigation from './components/navigation'
import Home from './components/home'
import Article from './components/article'
import articleView from './components/articleView'
import Project from './components/project'
import Contact from './components/contact'
import './scss/style.scss'
//https://stanko.github.io/webpack-babel-react-revisited/
//https://medium.com/@srinisoundar/setting-up-environment-for-react-sass-es2015-babel-with-webpack-2f77445129
const renderApp = () => {

    ReactDOM.render(
        <AppContainer>
            <HashRouter>
                <div className="app-container">
                    <header>
                        <Navigation />
                    </header>
                    <main>
                        <Switch>
                            <Route path="/" component={ Home } exact />
                            <Route path="/project" component={ Project } />
                            <Route path="/article" component={ Article } exact />
                            <Route path="/article/:id" component={ articleView } />
                            <Route path="/contact" component={ Contact } />
                            <Route render={ () => { return <Redirect to="/" /> }} />
                        </Switch>
                    </main>
                </div>
            </HashRouter>
        </AppContainer>,
        document.getElementById('app')
    )
}

if(module.hot) {
    module.hot.accept('./components/App', renderApp)
}

renderApp()