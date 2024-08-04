import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="bg-gray-900 p-10 rounded-3xl text-center items flex flex-col items-center">
      <Image
        className="rounded-3xl"
        src={"/myphoto.jpg"}
        width={200}
        height={200}
        alt="personal photo"
      />
      <h1 className="my-4 text-2xl">Muhammad Dicky Isra</h1>
      <div className="bg-slate-600 rounded-lg px-3 py-1">Web developer</div>
      <div className="mt-5 border-t-2 border-white w-11/12 rounded-md"></div>
    </div>
  );
};

export default Profile;
