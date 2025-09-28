import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../Pages';
import Books from '../Pages/books';
import Team from '../Pages/Team';
import Contact from '../Pages/Contact';

const HomePage = () => (
  <>
  </>
);

function App() {
  const [activePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Team':
        return <TeamPage />;
      case 'Contact':
        return <ContactPage />;
      case 'Home':
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <style>{`
        .text-shadow-1 { text-shadow: 0 .125rem .25rem rgba(0, 0, 0, .25); }
        .card-cover {
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
        }
      `}</style>
      <div className="container">

        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="books" element={<Books />}></Route>
            <Route path="team" element={<Team />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            {/* Tambahkan route lainnya sesuai kebutuhan */}
          </Routes>
        </BrowserRouter>

        <main>
          {renderPage()}
        </main>


      </div>
    </>
  );
}

export default App;

