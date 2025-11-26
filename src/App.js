import './App.css';
import Navigation from './components/Navigation.component';
import React from 'react';
import Signin from './components/Signin.component';
import Register from './components/Register.component';
import Loading from './components/Loading.component';
import Home from './layouts/Home.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if(route === "signout") {
      this.setState({ isSignedIn: false})
    } else if(route === "home") {
      this.setState({ isSignedIn: true})
    } 
    this.setState({ route: route })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading : true})
    }, 3000);

    this.setState({ isLoading: false})
  }

  // render() {
  //   const { isSignedIn, route, isLoading} = this.state;
  //   if(!isLoading) {
  //     return <Loading />
  //   } else {
  // return (
  //   <div>
  //     <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
  //     {
  //       route === "home" ? <p>Hello world</p> : route === "signin" ? <Signin /> : <Register />
  //     }
  //   </div>
  // )
//}


render() {
  return(
    <>
      <Home />
    </>
  )
}
}

export default App