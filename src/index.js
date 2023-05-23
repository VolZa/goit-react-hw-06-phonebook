import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { store } from 'redux/store';

// import './index.css';

const theme = {
  colors: {
    primary: '#232323',
    accent: '#6085d3',
    white: '#fdfdfd',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/goit-react-hw-06-phonebook"> 
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
