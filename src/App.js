import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './component/home'
import Users from './component/Users'
import UserShow from './component/UserShow'
import Posts from './component/Posts'
import PostsShow from './component/PostsShow'


function App() {
  return (
    <BrowserRouter>
      <div>
          <h3 align="center"><Link to="/">Home</Link>| 
          <Link to="/users">Users</Link>| 
          <Link to="/posts">Posts</Link></h3>

          <Route path="/" component={Home} exact={true}/>
          <Route path="/users" component={Users} exact={true}/>
          <Route path="/users/:id" component={UserShow} />
          <Route path="/posts" component={Posts} exact={true}/>
          <Route path="/posts/:id" component={PostsShow} />
      </div>
    </BrowserRouter>
  );
}

export default App;
