import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import ProductList from './routes/products.js';
import {LoginControl} from './tools/loginctrl';
import LoginPage from './routes/loginpage';
import NewProduct from './routes/newproduct';

class Main extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="newproduct" element={<NewProduct />} />
            </Routes>
        );
    }
}


// ========================================
ReactDOM.render(
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
    <Provider store={store}>
        <Router>
            <LoginControl key='login' />
            <div className='p-5'>
                <Main />
            </div>
        </Router>
    </Provider>
    </>,
    document.getElementById('root')
);
  