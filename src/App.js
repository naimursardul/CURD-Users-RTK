import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create-user" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
