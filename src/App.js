import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes/Routes';
import './Pages/Shared/Css/Style.css'

function App() {
  return (
    <div className='max-w-[1440px] mx-auto customFont'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
