
import React,{Component} from "react";
import './App.css';
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Container from "./components/Container";

class App extends Component{

  constructor() {
    super();

  }

  componentDidMount() {

  }

  render() {

    return (
        <div>
          <TopBar/>
          <SideBar/>
          <Container/>
        </div>


     )
  }


}

export default App;
