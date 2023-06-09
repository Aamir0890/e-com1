
import { Route,Routes } from 'react-router-dom';
import Home from './router/home/home.component'

import Navigation from './router/navigation/navigation.component';
import SignIn from './router/sign-in/sign-in.component';


const App = () => {

return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path='sign-in' element={<SignIn/>}/>
    </Route>
  </Routes>
)

}

export default App;
