import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Link to={'login'}>
                            <div>로그인</div>
                        </Link>
                    }
                ></Route>
                <Route
                    path="/login"
                    element={
                        <div>
                            <Login></Login>
                        </div>
                    }
                ></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
            </Routes>
        </div>
    );
}

export default App;
