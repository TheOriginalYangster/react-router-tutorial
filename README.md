# react-router-tutorial
A simple tutorial for React Router.  Created from 'create-react-app'

# Start
If you want to follow along with the tutorial, please checkout the branch **'tutorial-start'** before downloading!

Otherwise, the main branch contains the finished code.


npm install

npm start

## Tutorial

#### 0. Install React Router

```
npm install --save react-router-dom
```

#### 1. Add `<BrowserRouter />` to 'App.js'

In general, put the `<BrowserRouter/>` in the highest component possible.  All components you want to use React-Router need to be child components of your `<BrowserRouter/>`, otherwise you will get an error.

We are modifying the import, so `<BrowserRouter/>` is `<Router/>`.

```
import { BrowserRouter as Router } from 'react-router-dom'
```

```
<Router>
  <Header />
  <Body name={name} />
</Router>
```

#### 2. Add `<NavLink/>`s to 'Header.js'

`<NavLinks/>` are a react-router component that will change the browser's url without navigating away from the page.
Similar to an `<a>` tag.  They only change the URL, nothing else!
      
```
import { NavLink } from 'react-router-dom'
```

Replace the `<span/>`s with the following code:
```
<NavLink className={linkClass} to="/">Home</NavLink>
<NavLink className={linkClass} to="/about">About</NavLink>
<NavLink className={linkClass} to="/contact">Contact</NavLink>
<NavLink className={linkClass} to="/items">Items</NavLink>
```

#### 3. Add following code to Body:

`<Switch/>` components house Routes.
A `<Switch/>` component operates like a switch statment; it goes top-down comparing it's Routes "paths" the current URL.
When it finds a match, it will render the component that is nested in the found Route.

Note: The way I coded the routes below is the simplest way to pass props to `<Route/>` child components.

```
import { Switch, Route } from 'react-router-dom'
```

```
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
```



#### 4. Add `<NavLink />` to the card's image in '/Components/Body/Items/Item/Item.js'

`<Item/>`s are the components that render a single card's results.
We want to be able to click the card image and navigate to a url that's specific to the card id we clicked.
We have the 'uid' prop being passed in.  So when we render these `<NavLink/>`s, we generate a unique url based on the uid using template literals.
```
import { NavLink } from 'react-router-dom'
```

```
<NavLink to={`/card/${uid}`}>
  <img src={url} width="200px"/>
</NavLink>
```

#### 5. Add '/card/CARD_ID' route in 'Body.js'

We want to add a new route for the `<Card/>` component.  This route will have a **parameter**, similar to Express.js API endpoint parameters.  We can use this to pull the uid from the URL later.

In the `<Switch/>` component, add the route:
```
<Route exact path="/card/:uid">
  <Card name={name} />
</Route>
```

#### 6: Add withRouter() to export decleration and finish componentDidMount() function

Export the Card component using the withRouter() function.  This will give the component access to the following props: **history**, **match**, and **location**.
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

#### 7: All done!
You now have all the tools to get started using React Router!
