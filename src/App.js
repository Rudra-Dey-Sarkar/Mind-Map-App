import './App.css';
import Sidenav from './components/Sidenav/Sidenav';
import Topnav from './components/Topnav/Topnav';
import Body from './components/Body/Body';
function App() {
  return (
    <div className="App">
      <div className='sideNav'>
     <Sidenav/>
      </div>

     <div className='NavAndBody'>
     <Topnav/>
     <Body/>
     </div>
    </div>
  );
}

export default App;
