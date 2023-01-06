import logo from './logo.svg';
import './App.css';
import BasicGreet  from './Components/Greet';
import {Greet} from './Components/Greet';
import Welcome from './Components/Welcome';
import { CollectionDiv } from './Components/Collection_div';


function App() {
  return (
    <div className="App">
      <BasicGreet/>
      <Greet/> 
      <Welcome/>
      <CollectionDiv/>
    </div>
  );
}

export default App;
