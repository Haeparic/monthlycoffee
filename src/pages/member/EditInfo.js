import { Edit } from "@mui/icons-material";
import React, { useEffect } from "react";
import { txtShadow } from "utils/colors";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAccount, updateNickname } from "reducer/loggedState";
import { removeCookie } from "api/cookie";
import axios from "api/axios";
import { useForm } from "react-hook-form";

const EditInfo = () => {
  const { register, handleSubmit } = useForm({
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const memberOut = () => {
    window.Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (res) {
        console.log(res);
        //callback(); //연결끊기(탈퇴)성공시 서버에서 처리할 함수
        // window.location.href='/'
        removeCookie("access_token");
        alert("회원탈퇴되었습니다.");
        const uid = res.id;
        dispatch(logoutAccount(uid));
        navigate("/");
      },
      fail: function (error) {
        console.log("탈퇴 미완료");
        console.log(error);
      },
    });
  };
  const changeNickname = async (data) => {
    const body = {
      nickname: data.nickname,
    };
    if (body.nickname) {
      await axios
        .patch(`members/${userData.id}`, body)
        .then((res) => {
          console.log(res.data.nickname);
          dispatch(updateNickname(res.data.nickname));
          alert("닉네임이 변경되었습니다.");
        })
        .catch((err) => {
          return console.log(err);
        });
    }
  };
  const changeBudget = (data) => {
    const body = {
      amount: data.budget,
    };
    axios
      .post("budgets", body)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  // const getBudgets = async () => {
  //   axios
  //     .get("budgets")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getBudgets();
  // }, []);
  return (
    <div className="p-5">
      <span
        className="text-4xl ml-5 font-bold"
        style={{ textShadow: `${txtShadow}` }}
      >
        <Edit />
        <span className="text-yellow-400">&nbsp;내 정보 수정</span>
      </span>
      <div className="bg-[#F5E7DB] block w-[94vw] md:w-[75vw] p-5 text-3xl font-bold mt-5 space-y-5 rounded-lg">
        <div className="flex justify-between items-center px-24 py-5 bg-white border border-black">
          <span>닉네임</span>
          <form
            className="flex gap-2 w-[35%]"
            onSubmit={handleSubmit(changeNickname)}
          >
            <input
              className="bg-stone-100 w-3/4 py-2 text-center"
              type="text"
              defaultValue={userData.nickname}
              {...register("nickname")}
            />
            <button
              className="w-1/4 text-end text-blue-800 cursor-pointer"
              type="submit"
            >
              등록
            </button>
          </form>
        </div>
        <div className="flex justify-between items-center px-24 py-5 bg-white border border-black">
          <span>이번 달 목표</span>
          <form
            className="flex gap-2 w-[35%]"
            onSubmit={handleSubmit(changeBudget)}
          >
            <input
              className="bg-stone-100 w-3/4 py-2 text-center"
              type="text"
              // defaultValue={userData.nickname}
              {...register("budget")}
            />
            <button
              className="w-1/4 text-end text-blue-800 cursor-pointer"
              type="submit"
            >
              등록
            </button>
          </form>
        </div>
        <div
          className="text-center text-red-600 py-7 bg-white border border-black cursor-pointer"
          onClick={memberOut}
        >
          <span>회원탈퇴</span>
        </div>
      </div>
    </div>
  );
};
export default EditInfo;
