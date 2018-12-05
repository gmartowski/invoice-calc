import * as React from 'react';
import './App.less';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home';

class App extends React.Component {
    public render() {
        return (
            <div className="app">
                <Header titleContent="Invoice calculator" />
                <Home />
                <Footer copyright="Copyright &copy; 2018" footerContent="Calc" />
            </div>
        );
    }
}

export default App;
