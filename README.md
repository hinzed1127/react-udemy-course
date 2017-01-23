# React youtube player

Built using:
* [React](https://facebook.github.io/react/) - For a component-driven UI
* [Babel](https://babeljs.io/) - ES6 Transpiler
* [Webpack](https://webpack.js.org/) - Module bundling and more
* [Bootstrap](http://getbootstrap.com/) - Styling for quick prototyping

***

# Running

1. Download or clone the repository
2. Make sure you have npm/node installed. From the project directory, run `npm install`
3. Run `npm start`. This should open a browser to the app, or navigate to <http://localhost:3000>

***

# Scaling
Right now, this app is still very simple. It is limited by the YouTube search API in its current implementation, and is still a single page. Here's a few things I would add to scale this to a more a robust application:

### Redux

Right now, the app is only concerned with component state, which is fine for now, but as things get progressively more complex, we'll need to track a global state, which is where [Redux](http://redux.js.org/) comes in.

### React Router

This page is still a single view. As we add different routes and views to switch between, but want to retain a single page application, we can incorporate [React Router](https://github.com/ReactTraining/react-router) for routing integrated directly with React.

### A Back End (Authorization, Data Persistence, APIs, etc)

If we want to introduce the concept of different users, then we'll want to stand up a back end to accommodate this. Keeping things in JavaScript, this can be accomplished with Node. Among other things, we can build an API, add user authentication, and a database as we add different features catered to unique users. This could include:
* Saving things for later
* Favorites
* Playlists
* Adding other users as friends
* Viewing those friends' playlists, favorites, etc

### And More...

There's a lot more we could build here, but a combination of these features are some options for where to go next.
