import './App.css';
import BusinessList from './components/BusinessList.js'
import SearchBar from "./components/SearchBar";

const b = {
    imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Bordertown",
    state: "NY",
    zipCode: "10101",
    category: "ITALIAN",
    rating: 4.5,
    reviewCount: 90,
  };

function App() {
    const list = [b, b, b, b, b, b];
    return (
        <>
            <SearchBar />
            <BusinessList businesses={list}/>
        </>
    );
}

export default App;
