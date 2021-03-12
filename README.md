# react-router-tutorial
A simple tutorial for React Router.  Created from 'create-react-app'

## Start
If you want to follow along with the tutorial, please checkout the branch **'tutorial-start'** becore downloading!

Otherwise, the main branch contains the finished code.


npm install

npm start

## Tutorial

I will format this later!


0. npm install react-router-dom

1. Add <Route /> to 'App.js'

      import { BrowserRouter as Router } from 'react-router-dom'

      <Router>
        <Header />
        <Body name={name} />
      </Router>

You need to put BrowserRouter at the highest-level possible
All of BrowserRouter's child components will be linked to the BrowserRouter
You can't use react-router components outside of one.

2. Add <NavLink> to 'Header.js'

      import { NavLink } from 'react-router-dom'

      <NavLink className={linkClass} to="/">Home</NavLink>
      <NavLink className={linkClass} to="/about">About</NavLink>
      <NavLink className={linkClass} to="/contact">Contact</NavLink>
      <NavLink className={linkClass} to="/items">Items</NavLink>

NavLinks are a react-router component that will change the browser's url without navigating away from the page.
Similar to an <a> tag.

3. Add following code to Body:

    import { Switch, Route } from 'react-router-dom'

    <Switch>
      <Route exact path="/about">
        <About name={name} />
      </Route>
      <Route exact path="/items">
        <Items name={name} />
      </Route>
      <Route exact path="/contact">
        <Contact name={name} />
      </Route>
      <Route exact path="/">
        <Home name={name} />
      </Route>
    </Switch>

Switch components house Routes.
A switch component operates like a switch statment; it goes top-down checking it's routes "paths" to find a match.
When it finds a match, it will render the component that is nested in the Route.

1. Add <NavLink /> to the card's image in '/Components/Body/Card/Card.js'

```
import { NavLink } from 'react-router-dom'
```
```
<NavLink to={`/card/${uid}`}>
<img src={url} width="200px"/>
</NavLink>
```
2. Add Card route in 'Body.js'

```
<Route exact path="/card/:uid">
      <Card name={name} />
</Route>
```

6: Add withRouter() to export decleration and finish componentDidMount() function

Export the Card component using the withRouter() function.
```
export default withRouter(Card)
```

Pull the uid from the URL using the match property you now have access to.
```
const uid = this.props.match.params.uid
fetch(`https://api.magicthegathering.io/v1/cards/${uid}`)
      .then(r => r.json())
      .then(r => this.setState({ card: r.card }))
```
