import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const SERVER_URL = 'https://port-0-team-ss7z32llwip2yun.sel5.cloudtype.app/api/login';

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const password = e.target.password.value;
        axios.post(SERVER_URL, { id, password });
    };

    return (
        <div class="container">
            <div>
                <label>로그인</label>
            </div>

            <form onSubmit={onSubmitHandler}>
                <div class="login_input">
                    <div>아이디</div>
                    <input type="text" name="id" autoFocus />
                </div>

                <div class="login_input">
                    <div>비밀번호</div>
                    <input type="password" name="password" />
                </div>

                <div class="submit_button">
                    <input type="submit" value="로그인" />
                </div>
            </form>

            <Link to="/signup" style={{ textDecoration: 'none' }}>
                <div class="signup">회원가입</div>
            </Link>
        </div>
    );
}
export default Login;
