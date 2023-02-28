import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes/Routes';
import './Pages/Shared/Css/Style.css'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto customFont'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
