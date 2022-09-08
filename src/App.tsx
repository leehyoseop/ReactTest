import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Router from '../src/routes/Router';
import { useRecoilValue } from 'recoil';

function App() {
  return (
    <div>
      <Router/>
    </div>
  );
}
// class App extends Component {
//   render() {
//     return(
//       <div>
//         <Router/>
//       </div>
//     )
//   }
// }
export default App;
