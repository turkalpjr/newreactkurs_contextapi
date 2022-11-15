 import BookList from "./Components/BookList";
 import Navbar from "./Components/Navbar";
 import ThemeToggle from "./Components/ThemeToggle";
 import ThemeContextProvider from "./Contexts/ThemeContext";
 import AuthContextProvider from './Contexts/AuthContext';
 import BookContextProvider from './Contexts/BookContext';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeContextProvider>
        <Navbar/>
        <BookContextProvider>
          <BookList/>
        </BookContextProvider>
        <ThemeToggle/>
      </ThemeContextProvider>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
