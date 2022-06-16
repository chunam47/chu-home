import "./App.css";
import Login from "./components/Login";
import Todo from "./components/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          {/* <AppProvider> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
          {/* </AppProvider> */}
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
