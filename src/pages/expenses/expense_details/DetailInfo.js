import React from "react";
import { Close, Edit } from "@mui/icons-material";

const DetailInfo = ({ clickData, setModalIsOpen, edit, setEdit }) => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <Edit
          style={{ fontSize: 30, cursor: "pointer" }}
          onClick={() => setEdit(!edit)}
        />
        <Close style={{ fontSize: 30 }} onClick={() => setModalIsOpen(false)} />
      </div>
      <div className="flex justify-between">
        <div>
          <span>지출</span> - <span>카드</span>
        </div>
        <p className="text-right">{clickData[0].date}</p>
      </div>
      <p className="my-7 text-3xl font-bold text-center">MONTHLY COFFEE</p>
      <div className="flex justify-center">
        <img
          className="w-1/2 border-4 border-red-500 mb-5"
          src="./images/coffee.jpg"
          alt="pic"
        />
      </div>
      <hr className="border-black border-dashed" />
      <div className="m-5 flex justify-between items-center text-2xl">
        <div className="flex flex-col items-center">
          <span className="font-bold">{clickData[0].category}</span>
          <span className="text-lg">{clickData[0].brand}</span>
        </div>
        <span className="font-bold">{clickData[0].price}원</span>
      </div>
      <hr className=" border-black border-dashed" />
      <div className="my-5 flex flex-col gap-3">
        <div className="flex justify-between text-lg">
          <p className="font-bold">{clickData[0].likeHate}</p>
          <span className="text-blue-600">
            #{clickData[0].taste} #{clickData[0].mood} #{clickData[0].bean}
          </span>
        </div>
        <span className="text-lg">{clickData[0].memo}</span>
      </div>
      <hr className=" border-black border-dashed" />
      <div className="mt-3">
        <button>커뮤니티 등록</button>
      </div>
    </>
  );
};

export default DetailInfo;