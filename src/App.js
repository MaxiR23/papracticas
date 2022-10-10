'@ts-check';

import './App.css';
import Body from './components/Body/Body';
import MyAccount from './components/MyAccount/MyAccount';
import Navigation from './components/Navbar/Navigation';
import Registration from './components/Registration/Registration';

import { PointProvider } from './context/PointContext';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/Test/TestListContainer';


function App() {

  return (
    <ChakraProvider>
      <PointProvider>
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element={ <Body/> }> </Route>
          <Route path='/myaccount' element={ <MyAccount/> }></Route>
          {/* //Test */}
          <Route path='/registration' element={ <Registration/> }></Route>
          <Route path='/test' element={ <Test/> }></Route>
        </Routes>
        </BrowserRouter>
      </PointProvider>
    </ChakraProvider>
  );
}

export default App;
