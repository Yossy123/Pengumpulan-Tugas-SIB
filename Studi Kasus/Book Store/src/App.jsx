import { BrowserRouter, Route, Routes } from "react-router";
import Books from "./Pages/books";
import Home from "./Pages";
import LoginForm from "./component/shared/LoginForm";
import Team from "./Pages/Team";
import ContactPage from "./component/shared/ContactPage";

function App() {
  return (
    <>
      <div className="container">

        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}


export default App;
