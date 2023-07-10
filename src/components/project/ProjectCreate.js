import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../utils/api/axios";
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
  border: 1px solid #e5e6e6;
  border-radius: 10px;
  padding-left: 7px;
`;

const ShowingCode = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const FIELD_LIST = [
  { id: null, value: "분야 선택" },
  { id: "F0", value: "프론트엔드" },
  { id: "F1", value: "백엔드/서버" },
  { id: "F2", value: "웹" },
  { id: "F3", value: "데스크톱" },
  { id: "F4", value: "모바일" },
  { id: "F5", value: "그래픽" },
  { id: "F6", value: "게임" },
  { id: "F7", value: "데이터분석" },
  { id: "F8", value: "빅데이터" },
  { id: "F9", value: "보안" },
];

const REG_LIST = [
  { id: null, value: "거주 지역" },
  { id: "R0", value: "서울특별시" },
  { id: "R1", value: "부산광역시" },
  { id: "R2", value: "인천광역시" },
  { id: "R3", value: "대구광역시" },
  { id: "R4", value: "광주광역시" },
  { id: "R5", value: "대전광역시" },
  { id: "R6", value: "울산광역시" },
  { id: "R7", value: "경기도" },
  { id: "R8", value: "강원도" },
  { id: "R9", value: "충청북도" },
  { id: "R10", value: "충청남도" },
  { id: "R11", value: "경상북도" },
  { id: "R12", value: "경상남도" },
  { id: "R13", value: "전라북도" },
  { id: "R14", value: "전라남도" },
  { id: "R15", value: "제주도" },
];

const PNAME_REGEX = /^[ㄱ-ㅎ|가-힣|A-z0-9-_]{4,23}$/;
const PHC_REGEX = /^(?:[1-9]|0[1-9]|10)$/;
// const PCTS_REGEX =

const REGISTER_URL = "/api/project";

const ProjectCreate = () => {
  const userRef = useRef();
  const errRef = useRef();

  // const [pid, setPid] = useState(0);
  // setPid(1);
  // console.log(pid);

  const [pname, setPname] = useState("");
  const [validPname, setValidPname] = useState(false);
  const [pnameFocus, setPnameFocus] = useState(false);

  const [phc, setPhc] = useState(0);
  const [validPhc, setValidPhc] = useState(false);
  const [phcFocus, setPhcFocus] = useState(false);

  const [pfield, setPfield] = useState("");
  const [validPfield, setValidPfield] = useState("");
  const [selectedDropField, setSelectedDropField] = useState("");

  const [preg, setPreg] = useState("");
  const [validPreg, setValidPreg] = useState("");
  const [selectedDropReg, setSelectedDropReg] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidPname(PNAME_REGEX.test(pname));
  }, [pname]);

  useEffect(() => {
    setValidPhc(PHC_REGEX.test(phc));
  }, [phc]);

  // useEffect(() => {
  //     setValidPfield(PHC_REGEX.test(phc));
  // }, [phc])

  // useEffect(() => {
  //     setValidPreg(PHC_REGEX.test(phc));
  // }, [phc])

  useEffect(() => {
    setErrMsg("");
  }, [pname, phc]);

  const handleDropReg = (e) => {
    const { value } = e.target;
    setSelectedDropReg(REG_LIST.filter((el) => el.value === value)[0].id);
  };

  const handleDropField = (e) => {
    const { value } = e.target;
    setSelectedDropField(FIELD_LIST.filter((el) => el.value === value)[0].id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = PNAME_REGEX.test(pname);
    const v2 = PHC_REGEX.test(phc);

    if (!v1 || !v2) {
      setErrMsg("잘못된 접근입니다. Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ pname, phc, pfield, preg }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );

      console.log(JSON.stringify(response?.data));

      setSuccess(true);
      setPname("");
      setPhc("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("서버 응답 없음. No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("이미 있는 이름입니다. Project Name Taken");
      } else {
        setErrMsg("프로젝트 생성 실패. Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>프로젝트 생성 성공!</h1>
          <p>
            <Link to="/"> Home </Link>
          </p>
        </section>
      ) : (
        <section>
          <div className="mb-10"></div>
          <div className="sm:text-center lg:text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline mb-10">프로젝트 생성</span>
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col lg"
          >
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <div className="mb-4"></div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              * 프로젝트명 :
              <FontAwesomeIcon
                icon={faCheck}
                className={validPname ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPname || !pname ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="pname"
              ref={userRef} // 이거 없음 클나욤
              autoComplete="off"
              onChange={(e) => setPname(e.target.value)}
              value={pname}
              required
              aria-invalid={validPname ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setPnameFocus(true)}
              onBlur={() => setPnameFocus(false)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
            <p
              id="uidnote"
              className={
                pnameFocus && pname && !validPname
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              글자 수는 4-24 자 사이로 지정해주세요. <br />
              문자로 시작해야 합니다.
              <br />
              문자, 숫자, 기호는 -와 _ 만 허용됩니다.
            </p>

            <div className="mb-4"></div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="region"
            >
              * 지역 (Region):
            </label>
            <ProductBar>
              <ProductSearch
                onChange={handleDropReg}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              >
                {REG_LIST.map((el) => {
                  return (
                    <option defaultValue="123" key={el.id}>
                      {el.value}
                    </option>
                  );
                })}
              </ProductSearch>
              <ShowingCode>{selectedDropReg}</ShowingCode>
            </ProductBar>

            <div className="mb-4"></div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="phc"
            >
              * 모집 인원 (Head Count):
              <FontAwesomeIcon
                icon={faCheck}
                className={validPhc ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPhc || !phc ? "hide" : "invalid"}
              />
            </label>
            <input
              type="phc"
              id="phc"
              onChange={(e) => setPhc(e.target.value)}
              value={phc}
              required
              aria-invalid={validPhc ? "false" : "true"}
              aria-describedby="phcnote"
              onFocus={() => setPhcFocus(true)}
              onBlur={() => setPhcFocus(false)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            />
            {
              //<p className="text-red text-xs italic">Please choose a password.</p>
            }
            <p
              id="phcnote"
              className={phcFocus && !validPhc ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              0-10 사이 숫자로 적어 주세요.
            </p>

            <div className="mb-4"></div>
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="region"
            >
              * 모집 분야 (Field):
            </label>
            <ProductBar>
              <ProductSearch
                onChange={handleDropField}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              >
                {FIELD_LIST.map((el) => {
                  return (
                    <option defaultValue="123" key={el.id}>
                      {el.value}
                    </option>
                  );
                })}
              </ProductSearch>
              <ShowingCode>{selectedDropField}</ShowingCode>
            </ProductBar>

            <div className="mb-6"></div>
            <div className="flex items-center justify-between">
              <button
                disabled={!validPname || !validPhc ? true : false}
                className="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
              >
                프로젝트 생성
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                href="#"
              >
                <Link to="/"> Home </Link>
              </a>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default ProjectCreate;

//<button disabled={!validPname || !validPhc || !validPfield || !validPreg ? true : false}
