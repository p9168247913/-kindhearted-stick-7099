import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRoutes from './Routes/AllRoutes';
import UserLogin from './Components/User/UserLogin';
import UserRegister from './Pages/UserSignup/UserRegister';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
       <UserLogin />
      <UserRegister />
    </div>
  );
}

export default App;
