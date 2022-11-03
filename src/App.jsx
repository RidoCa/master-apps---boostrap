import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ReactSwitch from 'react-switch';

import './App.css';

export const ThemeContext = React.createContext(null);

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Container className="p-3" id={theme}>
        <Container className="p-5 mb-4 rounded-3">
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
          <h1 className="header">Welcome To React-Bootstrap</h1>
          <ExampleToast>
            We now have Toasts
            <span role="img" aria-label="tada">
              🎉
            </span>
          </ExampleToast>
        </Container>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
