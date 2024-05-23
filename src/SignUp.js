import './SignUp.css';
import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const SERVER_URL = 'https://port-0-team-ss7z32llwip2yun.sel5.cloudtype.app/api/register';

    const navigate = useNavigate();
    const itemInput = useRef([]);

    function doValidate() {
        if (itemInput.current[0].value === '') {
            alert('이름을 입력하세요.');
            return false;
        } else if (itemInput.current[1].value === '') {
            alert('아이디를 입력하세요.');
            return false;
        } else if (itemInput.current[2].value === '') {
            alert('비밀번호를 입력하세요.');
            return false;
        } else if (itemInput.current[2].value != itemInput.current[3].value) {
            alert('비밀번호가 일치하지않습니다..');
            return false;
        }
        return true;
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (doValidate()) {
            const name = itemInput.current[0].value;
            const id = itemInput.current[1].value;
            const password = itemInput.current[2].value;
            axios.post(SERVER_URL, { id, password, name });
            alert('회원가입이 완료되었습니다.');
            navigate('/login');
        }
    };

    function onClick(e) {
        const id = itemInput.current[1].value;
        axios.post('https://port-0-team-ss7z32llwip2yun.sel5.cloudtype.app/api/useid', { id });
    }

    return (
        <div class="container">
            <div>
                <label>회원가입</label>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div class="singup_input">
                    <div>이름 *</div>
                    <input ref={(el) => (itemInput.current[0] = el)} type="text" name="name" autoFocus />
                </div>

                <div class="singup_input">
                    <div>아이디 *</div>
                    <input ref={(el) => (itemInput.current[1] = el)} type="text" name="id" />
                </div>

                <div class="singup_input">
                    <div>비밀번호 *</div>
                    <input ref={(el) => (itemInput.current[2] = el)} type="password" name="password" />
                </div>

                <div class="singup_input">
                    <div>비밀번호 확인 *</div>
                    <input ref={(el) => (itemInput.current[3] = el)} type="password" name="passwordCheck" />
                </div>

                <div class="submit_button">
                    <input type="submit" value="가입완료" />
                </div>
            </form>
            <div>
                <button class="ww" onClick={onClick}>
                    중복확인
                </button>
            </div>
        </div>
    );
}
export default SignUp;
