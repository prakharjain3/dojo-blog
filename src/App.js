import Navbar from './Navbar'
import Home from './Home'

const App = () => {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  const link = "http://www.google.com";


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;