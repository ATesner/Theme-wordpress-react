import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import Navigation from './components/navigation'
import Home from './components/home'
import Article from './components/article'
import Project from './components/project'
import Contact from './components/contact'
import './scss/style.scss'
//https://medium.freecodecamp.org/how-to-build-react-apps-on-top-of-the-wordpress-rest-api-bcc632808025
//https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5
const renderApp = () => {

    ReactDOM.render(
        <AppContainer>
            <HashRouter>
                <div>
                    <header>
                        <Navigation />
                    </header>
                    <main>
                        <Switch>
                            <Route path="/" component={ Home } exact />
                            <Route path="/project" component={ Project } />
                            <Route path="/article" component={ Article } />
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