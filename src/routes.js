import React from "react"
import { Switch, Route} from "react-router-dom"
import Home from './components/Home/Home.js'
import Cards from './components/Cards/Cards.js'
import Pricing from "./components/Pricing/Pricing.js"
import Blocks from "./components/Blocks/Blocks.js"
import Form from "./components/Forms/Form.js"

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