import { Link } from "react-router-dom";
// import { gql, useQuery } from "@apollo/client";
import { useAtom } from "jotai";
import { authAtom } from "../components/Atoms";
import BeasiswaCard from "../components/BeasiswaCard";
import { dummyData } from "../static/data";

// const GET_BEASISWA = gql`
//   query GET_BEASISWA {
//     beasiswa {
//       nama
//       id
//       created_at
//       img_url
//       reg_date
//       deadline_date
//     }
//   }
// `;
export default function LandingPage() {
  const [user] = useAtom(authAtom);

  const caraKerja = [
    {
      title: "Registrasi Akun",
      text: "Registrasi akun agar kami bisa merekomendasikan",
      img: "https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Fkerja1.svg?alt=media&token=c84298f3-3f6f-4fdf-a84d-cb06e93a52dc",
    },
    {
      title: "Pilih Beasiswa",
      text: "Pilih beasiswa yang telah disesuikan denganmu",
      img: "https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Fkerja2.svg?alt=media&token=431bb8f7-6333-4f8c-8879-cdd13ded98d7",
    },
    {
      title: "Raih Beasiswa",
      text: "Semangat menyiapkan persyaratan beasiswa",
      img: "https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Fkerja3.svg?alt=media&token=34fcfa5d-0bd1-4c68-bdc7-5528e42d2eb7",
    },
  ];
  //   const { loading, error, data } = useQuery(GET_BEASISWA);

  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
  return (
    <div>
      <div className="flex flex-col-reverse items-center  my-14 max-w-[90rem] mx-auto px-4   sm:flex-row ">
        <div>
          <p className="text-6xl font-bold leading-snug text-gray-800 mb-7">
            Peluang <span className="text-blue-500"> Beasiswa</span> Terbaik
            untuk Masa Depan Gemilang!
          </p>
          <p className="w-full mb-5 font-medium text-justify text-gray-500 sm:w-3/4">
            Jangn Biarkan Biaya Pendidikan Menghalangi Mimpimu untuk Meraih Masa
            Depan Gemilang, Temukan Berbagai Informasi Beasiswa Terlengkap dan
            Akurat Hanya di Sini!
          </p>
          {!user.user ? (
            <Link to={"/daftar"}>
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-3 mr-5 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Daftar
              </button>
            </Link>
          ) : null}

          <a href="#kerja">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-blue-500 transition-all border border-transparent rounded-md hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2"
            >
              Jelajahi
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </a>

          <div className="flex text-center mt-7 gap-9">
            <div>
              <h3 className="text-2xl font-bold ">50+</h3>
              <small className="text-sm font-medium text-gray-400 ">
                Total beasiswa
              </small>
            </div>
            <div>
              <h3 className="text-2xl font-bold ">29+</h3>
              <small className="text-sm font-medium text-gray-400 ">
                Total mitra
              </small>
            </div>
            <div>
              <h3 className="text-2xl font-bold ">99+</h3>
              <small className="text-sm font-medium text-gray-400 ">
                Total pengguna
              </small>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/Thesis-amico%201.svg?alt=media&token=33c10c00-7d26-4d75-8ec6-a0d4acba81f0"
            alt="hero-img"
          />
        </div>
      </div>

      <div className="pb-20 pt-14 bg-blue-50">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-9 ">
          Cara Kerja Kami
        </h3>

        <div
          id="kerja"
          className="flex flex-wrap justify-center gap-10 text-center text-gray-800 "
        >
          {caraKerja.map((item, index) => (
            <div
              key={index}
              className="flex bg-white border rounded-md shadow-lg w-96"
            >
              <div className="p-14">
                <img src={item.img} className="mx-auto mb-5 w-36" alt="" />
                <h3 className="text-lg font-bold text-gray-800 ">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-800 ">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" max-w-[90rem] mx-auto px-8  py-8 gap-10  mb-24 mt-20  grid grid-cols-1 md:grid-cols-2 items-center rounded-md shadow-xl bg-blue-500">
        <div className="flex justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Ftentang-img.png?alt=media&token=42e64130-7e0e-4afc-8601-4822594e0534"
            alt=""
            className="w-[600px] rounded-md"
          />
        </div>

        <div className="text-white">
          <h3 className="mb-5 text-4xl font-bold">Misi Kami</h3>
          <p className="w-full sm:w-11/12 line-clamp-6">
            Kami adalah sebuah start up yang berfokus pada penyediaan informasi
            beasiswa untuk masyarakat Indonesia. Berawal dari kesadaran akan
            banyaknya anak-anak muda yang sulit mendapatkan akses ke pendidikan
            berkualitas karena faktor finansial, kami berkomitmen untuk menjadi
            solusi terdepan dalam memberikan informasi beasiswa yang akurat,
            terpercaya, dan mudah diakses. dan juga kami dari beasiswakita ingin
            memberikan rekomendasi beasiswa kepada para pengguna kami
          </p>
          <Link to={"/tentang"}>
            <div className="inline-flex items-center gap-5 py-3 font-semibold transition-all border border-transparent focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2">
              lebih lengkap
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </Link>
        </div>
      </div>

      <div className="my-16 max-w-[90rem] mx-auto px-4">
        <h3 className="text-4xl font-bold text-center mb-9 ">
          Informasi Beasiswa Terbaru
        </h3>
        <div className="grid justify-center grid-cols-1 gap-10 mb-7 mx- 28 md:grid-cols-4 sm:grid-cols-2">
          {dummyData.data.beasiswa.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              to={`/beasiswa/${item.id}`}
              state={{ data: item }}
              className="w-full md:w-80"
            >
              <BeasiswaCard item={item} />
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link to={"/beasiswa"}>
            <button
              type="button"
              className="py-[.688rem] px-4 inline-flex  rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
            >
              Lebih Banyak
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
