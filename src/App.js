import { RouterProvider } from 'react-router-dom';
import './App.css';
// import Home from './Pages/Home/Home/Home';
import { router } from './Router/Router';

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
