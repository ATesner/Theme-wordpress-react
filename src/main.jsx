import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import Navigation from './components/navigation'
import Home from './components/home'
import Article from './components/article'
import articleView from './components/article-view'
import Project from './components/project'
import Contact from './components/contact'
import './scss/style.scss'

const renderApp = () => {

    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <div className="app-container">
                    <header>
                        <Navigation />
                    </header>
                    <main>
                        <Switch>
                            <Route path="/" component={ Home } exact />
                            <Route path="/project" component={ Project } />
                            <Route path="/article" component={ Article } exact />
                            <Route path="/:slug" component={ articleView } />
                            <Route path="/contact" component={ Contact } />
                            <Route render={ () => { return <Redirect to="/" /> }} />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('app')
    )
}

if(module.hot) {
    module.hot.accept('./components/App', renderApp)
}

renderApp()