import * as React from 'react';
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Header titleContent="sdasdasd" />
                <Home />
                <Footer copyright="dasdjas" footerContent="dsdsadasda" />
            </div>
        );
    }
}

export default App;
