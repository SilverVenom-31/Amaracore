import "./App.css";
import UsersList from "./components/UsersList";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {

  const userListComponent = UsersList()
  return (
    <div className="container">
      <Router>
        <Routes>
        <Route exact  path="/users" element={userListComponent} />
        <Route exact  path="/" element={userListComponent} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
