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
                            <Route path="/project" component={ Project } exact />
                            <Route path="/article" component={ Article } exact />
                            <Route path="/contact" component={ Contact } exact />
                            <Route path="/:slug" component={ articleView } />
                            <Route render={ () => { return <Redirect to="/" /> }} />
                        </Switch>
                    </main>
                    
                <div className="col-sm-12 footer">
                    <div className="col-sm-4 footer-element">
                        <a href="https://www.linkedin.com/in/antoine-tesner-6a42a511a/" target="_blank">
                            <img className="footer-icon "src="https://cdn2.iconfinder.com/data/icons/zeshio-s-social-media/200/Social_Media_Icons_Edged_Highlight-15-128.png" alt="linkedIn" title="LinkedIn"/>
                        </a>
                    </div>
                    <div className="col-sm-4 footer-element">
                        <a href="https://github.com/ATesner" target="_blank">
                            <img className="footer-icon "src="https://cdn4.iconfinder.com/data/icons/social-media-2070/140/_github-128.png" alt="github" title="Github"/>
                        </a></div>
                    <div className="col-sm-4 footer-element">
                        <a href="https://www.instagram.com/ttoinee/" target="_blank">
                        <img  className="footer-icon" src="https://cdn3.iconfinder.com/data/icons/erlen-s-social-media-icon-set/128/icon_instagram_128.png" alt="instagram" title="Instagram"/>
                        </a>
                    </div>
                </div>
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