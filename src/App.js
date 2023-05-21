import logo from './logo.svg';
import './App.css';
import Docs from './components/Docs';
import Nav from './components/Nav';
import  Toolbar  from './components/Toolbar';
import Sidebar from './components/Sidebar';
import Inputer from './components/Inputer';

function App() {
  return (
    <div className="App" style={{
      backgroundColor:"#F8F8F8",}}>
      <Nav/>
      <Toolbar/>
      {/* <div className='align-top '> */}
      <Sidebar/>
      {/* </div> */}
      <Inputer/>
    </div>
  );
}

export default App;
