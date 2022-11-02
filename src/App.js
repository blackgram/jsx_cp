import "./App.css";
import FullName from "./components/FullName";
import Address from "./components/Address";
import ProfilePhoto from "./components/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <div className="profile">
      <h1>My Profile</h1>
        <div className="el-wrapper">
          
      <div className="el">
          <ProfilePhoto />
        </div>
        <div className="el">
          <FullName />

          <Address />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
