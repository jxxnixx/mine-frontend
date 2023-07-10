import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../utils/api/axios';
import { Link } from "react-router-dom";
import styled from "styled-components";

axios.defaults.withCredentials = true;

const ProductBar = styled.form`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const ProductSearch = styled.select`
  width: 92%;
  height: 75%;
  border: 1px solid #E5E6E6;
  border-radius: 10px;
  padding-left: 7px;
`;

const ShowingCode = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const REG_LIST = [
    { id: null, value: '거주 지역' },
    { id: 'R0', value: '서울특별시' },
    { id: 'R1', value: '부산광역시' },
    { id: 'R2', value: '인천광역시' },
    { id: 'R3', value: '대구광역시' },
    { id: 'R4', value: '광주광역시' },
    { id: 'R5', value: '대전광역시' },
    { id: 'R6', value: '울산광역시' },
    { id: 'R7', value: '경기도' },
    { id: 'R8', value: '강원도' },
    { id: 'R9', value: '충청북도' },
    { id: 'R10', value: '충청남도' },
    { id: 'R11', value: '경상북도' },
    { id: 'R12', value: '경상남도' },
    { id: 'R13', value: '전라북도' },
    { id: 'R14', value: '전라남도' },
    { id: 'R15', value: '제주도' },
];

const USER_REGEX = /^[ㄱ-ㅎ|가-힣|A-z][ㄱ-ㅎ|가-힣|A-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const TEL_REGEX = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const REGISTER_URL = '/api/account';

const AccountCreate = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    
    const [tel, setTel] = useState('');
    const [validTel, setValidTel] = useState(false);
    const [telFocus, setTelFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    
    const [reg, setReg] = useState('');
    const [selectedDropValue, setSelectedDropValue] = useState('');

    const [git, setGit] = useState('');
    const [validGit, setValidGit] = useState(false);
    const [gitFocus, setGitFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        console.log(EMAIL_REGEX.test(email))
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidTel(TEL_REGEX.test(tel));
    }, [tel])

    useEffect(() => {
        setValidGit(URL_REGEX.test(git));
    }, [git])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, tel, pwd, matchPwd, git])

    const handleDropProduct = e => {
        const { value } = e.target;
        setSelectedDropValue(REG_LIST.filter(el => el.value === value)[0].id);  
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = TEL_REGEX.test(tel);
        const v5 = URL_REGEX.test(git);
        // true/false 값 저장

        if (!v1 || !v2 || !v3 || !v4 ) {
            // 이 값들 중에 하나라도 false 이면
            // 즉 username, pwd 형식이 하나라도 맞지 않거나
            // 조건 안에 들어 있는 값들이 채워지지 않을 경우.
            // git은 필수요소가 아니므로, 일단 제외

            setErrMsg("잘못된 접근입니다. Invalid Entry"); // 출력
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, email, tel, pwd, git}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: false
                }
            );
            // console.log 부분은 확인용이므로, 나중에 삭제해주기! 
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))

            //데이터는 response.data 안에 들어 있음!

            setSuccess(true);
        
            setUser('');
            setEmail('');
            setTel('');
            setPwd('');
            setMatchPwd('');
            setGit('');
            // success가 true가 되면, state와 input 정리

        } catch (err) {
            if (!err?.response) { // 위에 정의한 response
                setErrMsg('서버 응답 없음. No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('이미 있는 이름입니다. Username Taken');
            } else {
                setErrMsg('회원가입 실패. Registration Failed')
            }
            errRef.current.focus();
            // err 에 focus
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>성공!</h1>
                    <p>
                        <Link to="/Login">로그인 (Sign In)</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <div className="mb-10"></div>
                    <div className="sm:text-center lg:text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline mb-10">회원가입</span>
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit} className="mx-auto max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col lg">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                        <p className="text-red text-xs italic">*는 필수 영역입니다.</p>
                        <div className="mb-4"></div>
                        
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                            * 이름 (Username):
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            글자 수는 4-24 자 사이로 지정해주세요. <br />
                            문자로 시작해야 합니다.<br />
                            문자, 숫자, 기호는 -와 _ 만 허용됩니다.
                        </p> */}
                       {userFocus && user && !validName && <p className="rounded-md bg-black text-white p-1 relative -b-4 text-xs">
                            <FontAwesomeIcon icon={faInfoCircle} />
                            글자 수는 4-24 자 사이로 지정해주세요. <br />
                            문자로 시작해야 합니다.<br />
                            문자, 숫자, 기호는 -와 _ 만 허용됩니다.
                        </p>}
                        
                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                            * E-mail:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emlnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            placeholder="abc@google.com"          
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        <p id="emlnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            이메일 똑바로 쓰새오
                        </p>

                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="tel">
                            * 휴대폰 번호 (Telephone):
                            <FontAwesomeIcon icon={faCheck} className={validTel ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTel || !tel ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="tel"
                            id="tel"
                            autoComplete="off"
                            onChange={(e) => setTel(e.target.value)}
                            value={tel}
                            required
                            aria-invalid={validTel ? "false" : "true"}
                            aria-describedby="telnote"
                            onFocus={() => setTelFocus(true)}
                            onBlur={() => setTelFocus(false)}
                            placeholder="000-0000-0000"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        <p id="telnote" className={telFocus && tel && !validTel ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            양식에 맞게 쓰새오
                        </p>

                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                            * 비밀번호 (Password):
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        {//<p className="text-red text-xs italic">Please choose a password.</p>    
                        }
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            글자 수는 8-24 자 사이에서 지정해주세요.<br />
                            소문자, 대문자, 숫자, 기호 전부 포함해야 합니다.<br />
                            허용되는 기호 : <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> 
                            <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="cpassword">
                            * 비밀번호 확인 (Confirm Password):
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            위에 입력한 비밀번호와 동일해야 합니다.
                        </p>


                        <div className="mb-4"></div>  
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="region">
                            * 거주 지역 (Region):
                        </label>
                    
                        <ProductBar>
                            <ProductSearch onChange={handleDropProduct} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker">
                            {REG_LIST.map(el => {
                                return (
                                <option defaultValue="123" key={el.id}>
                                    {el.value}
                                </option>
                                );
                            })}                        
                            </ProductSearch>
                            <ShowingCode>{selectedDropValue}</ShowingCode>
                        </ProductBar>
                        
                        <div className="mb-4"></div>
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="url">
                            Github:
                            <FontAwesomeIcon icon={faCheck} className={validGit ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validGit || !git ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="url"
                            id="git"
                            autoComplete="off"
                            onChange={(e) => setGit(e.target.value)}
                            value={git}
                            // required
                            aria-invalid={validGit ? "false" : "true"}
                            aria-describedby="gitnote"
                            onFocus={() => setGitFocus(true)}
                            onBlur={() => setGitFocus(false)}
                            placeholder="https://.."
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" />
                        <p id="gitnote" className={gitFocus && git && !validGit ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            깃헙내놔
                        </p>
                        
                        <div className="mb-6"></div>
                        <div className="flex items-center justify-between">
                            <button disabled={!validName || !validPwd || !validMatch || !validEmail || !validTel ? true : false}
                            className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
                                회원가입
                            </button>
                            <Link className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" 
                            to="../login">
                                이미 계정이 있으신가요?
                            </Link>
                        </div>
                    </form>
                </section>
            )}
        </>
    )
}

export default AccountCreate;