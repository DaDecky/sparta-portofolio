import React from "react";
import Title from "../Title";
import Link from "next/link";

const Experience = () => {
  return (
    <div>
      <Title title="Experience" />
      <section>
        <h1 className="font-semibold text-lg my-1">
          Wakil Ketua Divisi IT WISOKTO 2024 (Aug 2024 - Present)
        </h1>
        <ul className="text-base font-normal list-disc ml-4">
          <li>
            <p className="text-base font-normal">
              Membuat web yang akan digunakan untuk segala kegiatan WISOKTO 2024
            </p>
          </li>
        </ul>
      </section>
      <br />
      <section>
        <h1 className="font-semibold text-lg my-1">
          Ketua Subdivisi Website Impact 4.0 (May 2024 - Jul 2024)
        </h1>
        <ul className="text-base font-normal list-disc ml-4">
          <li>
            {" "}
            <p className="text-base font-normal ">
              Membuat{" "}
              <Link
                href={"https://impact-frontend-2024.vercel.app/"}
                className="underline text-blue-300"
              >
                website utama
              </Link>{" "}
              yang berguna sebagai sumber informasi dan pendaftaran calon
              peserta.
            </p>
          </li>
          <li>
            Membuat web berbasis moodle yang digunakan untuk lomba berbasis
            online
          </li>
          <li>
            Membuat web berbasis Judgels yang digunakan untuk lomba berbasis
            online dan offline
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Experience;
