import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-gray-900 p-10 rounded-3xl text-center items flex flex-col items-center min-w-fit h-fit lg:sticky lg:top-0">
      <Image
        className="rounded-3xl"
        src={"/myphoto.jpg"}
        width={200}
        height={200}
        alt="personal photo"
      />
      <h1 className="my-4 text-2xl">Muhammad Dicky Isra</h1>
      <div className="bg-gray-600 rounded-lg px-5 py-2">Teknik Informatika</div>
      <div className="my-5 border-t-2 border-white w-11/12 rounded-md"></div>
      <section className="self-start">
        <nav className="flex flex-col gap-2">
          <ul>
            <li className="flex items-center">
              <FaLinkedin size={20} />

              <Link
                href={"https://www.linkedin.com/in/mdickyisra"}
                target="_blank"
                className="ml-2 text-base hover:text-gray-400 ease-in-out duration-300 "
              >
                in/mdickyisra
              </Link>
            </li>
          </ul>
          <li className="flex items-center">
            <FaGithub size={20} />

            <Link
              href={"https://github.com/DaDecky"}
              target="_blank"
              className="ml-2 text-base hover:text-gray-400 ease-in-out duration-300 "
            >
              DaDecky
            </Link>
          </li>
          <li className="flex items-center">
            <FaInstagram size={20} />

            <Link
              href={"https://www.instagram.com/dadecky"}
              target="_blank"
              className="ml-2 text-base hover:text-gray-400 ease-in-out duration-300 "
            >
              dadecky
            </Link>
          </li>
          <li className="flex"></li>
        </nav>
      </section>
    </div>
  );
};

export default Profile;
