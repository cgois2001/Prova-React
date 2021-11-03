import React from "react"
import { Switch, Route} from "react-router-dom"
import Home from './pages/Home.js'
import Cards from './pages/Cards.js'
import Pricing from "./pages/Pricing.js"
import Blocks from "./pages/Blocks.js"
import Form from "./pages/Form.js"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/cards" component={Cards} exact/>
            <Route path="/pricing" component={Pricing} exact/>
            <Route path="/blocks" component={Blocks} exact/>
            <Route path="/form" component={Form} exact/>
            
        </Switch>
    )
}