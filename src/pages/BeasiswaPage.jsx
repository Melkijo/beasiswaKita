// import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
import { useState } from "react";
import Pagination from "../components/Pagination";
import BeasiswaCard from "../components/BeasiswaCard";
import { dummyData } from "../static/data";
// const GET_BEASISWA = gql`
//    query GET_BEASISWA {
//       beasiswa {
//          nama
//          id
//          created_at
//          img_url
//          reg_date
//          deadline_date
//       }
//    }
// `;

export default function BeasiswaPage() {
  const [currentPage, setCurentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const [itemSearch, setItemSearch] = useState("");
  const [searchParam] = useState(["nama"]);
  //   const { loading, error, data } = useQuery(GET_BEASISWA);
  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;

  const searchBeasiswa = (items) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(itemSearch.toLowerCase()) > -1
        );
      });
    });
  };
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  function getNumberOfDays(end) {
    const date1 = new Date();
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }
  return (
    <>
      <div className="py-16 bg-blue-500 ">
        <div className="max-w-[90rem] w-full mx-auto px-4 text-white">
          <h1 className="mb-5 text-5xl font-bold">
            Informasi Seputar Beasiswa Terbaru
          </h1>
          <p>
            Menemukan Peluang Terbaik untuk Mendapatkan Beasiswa Impian Anda
            dengan Informasi Seputar Beasiswa Terbaru Dapatkan keuntungan dari
            kesempatan emas untuk memperoleh beasiswa terbaik dengan mengikuti
            informasi seputar beasiswa terbaru.
          </p>
        </div>
      </div>

      <div className="max-w-[90rem] w-full mx-auto px-4">
        <div className="flex items-center justify-between my-5">
          <h3 className="text-3xl font-bold">Semua Beasiswa</h3>
          <div className="relative flex rounded-md shadow-sm">
            <input
              type="text"
              id="hs-search-box-with-loading-5"
              name="hs-search-box-with-loading-5"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm pl-11 text-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="Input search"
              value={itemSearch}
              onChange={(e) => setItemSearch(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid justify-center grid-cols-1 gap-10 md:grid-cols-4 sm:grid-cols-2">
          {searchBeasiswa(dummyData.data.beasiswa)
            .filter((item) => {
              return getNumberOfDays(item.deadline_date) >= 0;
            })
            .slice(firstPostIndex, lastPostIndex)
            .map((item, index) => (
              <Link
                key={index}
                to={`/beasiswa/${item.id}`}
                state={{ data: item }}
                className="w-full md:w-80"
              >
                <BeasiswaCard item={item} />
              </Link>
            ))}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Pagination
          totalPosts={dummyData.data.beasiswa.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurentPage}
        />
      </div>
    </>
  );
}
