import React from "react";
import Title from "../Title";

const About = () => {
  return (
    <div className="">
      <Title title="About Me" />
      <section>
        <p className="text-base font-normal">
          Perkenalkan aku Muhammad Dicky Isra, atau biasa dipanggil Diky. Saat
          ini aku sedang menempuh studi sarjana dalam bidang Teknik Informatika
          di Institut teknologi Bandung.
        </p>
      </section>

      <section className="my-10">
        <h1 className="font-semibold text-3xl my-1">Minat dan Bakat</h1>

        <p className="text-base font-normal">
          Saat ini aku memiliki minat terhadap beberapa bidang, antara lain Web
          Development, Mobile Development, dan Data Science. Saat ini juga fokus
          utamaku adalah Web Development, aku mempelajari Web Development karena
          aku berminat pada karir Software Engineering.
        </p>
        <p className="text-base font-normal mt-2">
          Aku tidak merasa diriku berbakat sehingga aku harus mengembangkan
          kemampuanku dengan bekerja keras dengan mendalami minatku.
        </p>
      </section>
      <section className="my-10">
        <h1 className="font-semibold text-3xl my-1">Pencapaian</h1>

        <p className="text-base font-normal">
          Sampai saat ini, aku belum memiliki pencapaian, cukup ironis. Namun,
          aku memiliki komitmen untuk mencapai segala yang ingin aku raih selama
          kuliah maupun setelahnya.
        </p>
        <p className="text-base font-normal mt-2">
          Akan tetapi, jika project dapat dihitung sebagai pencapaian, maka
          dapat melihatnya pada bagian Experience.
        </p>
      </section>
    </div>
  );
};

export default About;
