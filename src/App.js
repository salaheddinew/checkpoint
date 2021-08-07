import logo from "./logo.svg";
import "./App.css";
import Adress from "./component/Profile/Address/Adress";
import Fullname from "./component/Profile/Fullname/Fullname";
import Profilephoto from "./component/Profile/Profilephoto/Profilephoto";
function App() {
  return (
    <div className="App">
      <div className="Full">
        <Adress Adress="Abane Ramdane" />
        <Fullname FirstName="Salah" LastName="Heba" />
      </div>
      <Profilephoto />
    </div>
  );
}

export default App;
