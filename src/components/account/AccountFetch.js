import { useState, useEffect } from "react";
import axios, { axiosPrivate } from "../../utils/api/axios";
import { getCookie } from "../../utils/api/cookie";

function AccountFetch() {
  const [loading, setLoading] = useState(true);
  const [inform, setInform] = useState([]);

  const INFORM_URL = "/api/account";

  async function getProfile() {
    try {
      const response = await axios.get(
        INFORM_URL,
        //JSON.stringify(),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getCookie("token"),
          },
          withCredentials: false,
        }
      );

      console.log(JSON.stringify(response));

      setInform(response.data);
      setLoading(false);

      /** API not yet implemented (아직 /api/account/{userId} 형태로 아이디를 가져오는 API가 없어서 주석처리 함!) */
      // const response = await axios.get(INFORM_URL)
      // const userID = response.data.email; // userID

      // const response2 = await axios.get(INFORM_URL+userID);
      // console.log(response2.data)
    } catch (err) {
      console.log(err);
    }
  }

  console.log(inform);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <div style={{ background: "linear-gradient(#818cf8 50%, #F2F5F7 50%)" }}>
        <div class="flex flex-col items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/103104002?s=400&u=fe6790e6a567f81123b15f0effc05364cc4b19e8&v=4"
            alt="Profile Picture"
            class="rounded-full border-2  bg-white  mt-20"
          />
          <h1 class="font-bold text-xl mt-5 mb-1">
            {inform.nickname}
            <span class="text-text font-normal ml-2"></span>
          </h1>
          <h2 class="text-text text-sm">{inform.email}</h2>
        </div>
        <div class=" mt-6 py-6 border border-neutral border-r-0 border-b-0 border-l-0">
          <div class="text-center">
            <h3 class="font-bold text-secondary">{inform.position}</h3>
          </div>
          <div class="text-center">
            <h3 class="font-bold text-secondary">{inform.techStack}</h3>
          </div>
          <div class="text-center">
            <h3 class="font-bold text-secondary">{inform.experience}</h3>
          </div>
        </div>
      </div>
      {/* {loading ? (
            <h1>Loading...</h1> 
          ) : (
            <div
            key = {inform.email}
            email = {inform.email}
            nickname = {inform.nickname} 
            phone = {inform.phone}
            address = {inform.address}
            position = {inform.position}
            message = {inform.message}
            techStack = {inform.techStack}
            experience = {inform.experience}
          />
          )} */}
    </div>
  );
}

export default AccountFetch;

/*
method : 'GET',
            body : JSON.stringify(),
            headers : {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            },
            */

/*
localStorage.setItem("user-inform",JSON.stringify(result));
        history.push("/add");
        */
