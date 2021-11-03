import React from "react"
import { Switch, Route} from "react-router-dom"
import Home from './components/Home/Home.js'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            
        </Switch>
    )
}