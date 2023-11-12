import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactListItem from './components/ContactListItem';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      <header>
        <h1 className="menu">Contact Center</h1>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact/list">Contact List</Link>
            </li>
            <li>
              <Link to="/contact/form">Add new contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/contact/list" element={<ContactList />} />
          <Route path="/contact/form" element={<ContactForm />} />
          <Route path="/contact/:id" element={<ContactListItem />} />
        </Routes>
        <img
          className="img"
          src="https://www.svgrepo.com/show/90101/call-center-worker-with-headset.svg"
          width={300}
          alt="guy with headphones on"
        />
      </main>
    </Router>
  );
}

export default App;
