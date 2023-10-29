import './App.css';
import BusinessList from './components/BusinessList.js'
import SearchBar from "./components/SearchBar";

function App() {
    const list = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <SearchBar />
            <BusinessList businesses={list}/>
        </>
    );
}

export default App;
