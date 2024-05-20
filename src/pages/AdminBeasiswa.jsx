// import { gql, useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import Pagination from "../components/Pagination";
import Moment from "moment";
import { dummyData } from "../static/data";
// const DELETE_BEASISWA = gql`
//   mutation MyMutation($id: uuid!) {
//     delete_beasiswa_by_pk(id: $id) {
//       id
//     }
//   }
// `;

// const GET_BEASISWA = gql`
//   query MyQuery {
//     beasiswa(order_by: { created_at: desc }) {
//       deadline_date
//       desc
//       domisili
//       id
//       img_url
//       nama
//       pendidikan
//       reg_date
//       link
//     }
//     users {
//       id
//       email
//       domisili
//       pendidikan
//       namaDepan
//     }
//   }
// `;

export default function AdminBeasiswa() {
  //   const { loading, error, data } = useQuery(GET_BEASISWA);
  //   const [deleteBeasiswa, { loading: loadingDelete }] = useMutation(
  //     DELETE_BEASISWA,
  //     {
  //       refetchQueries: [GET_BEASISWA],
  //     }
  //   );
  const [currentPage, setCurentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  //   const [show, setShow] = useState(false);
  //   const [selectedData, setSelectedData] = useState({});
  //   const handleDeleteBeasiswa = (idx) => {
  //     Swal.fire({
  //       title: "Apakah kamu yakin?",
  //       text: "Data beasiswa tidak bisa dikembalikan lagi!!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Ya, Hapus!",
  //       cancelButtonText: "Batal",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         deleteBeasiswa({
  //           variables: {
  //             id: idx,
  //           },
  //         });
  //         Swal.fire("Terhapus!", "Data Beasiswa terhapus.", "success");
  //       }
  //     });
  //   };

  const form = useRef();

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

  //   if (loading || loadingDelete) return "Loading...";
  // if (error) return `Error! ${error.message}`;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_t6gq2hu",
        "template_zif90bs",
        form.current,
        "waNnSJ7omKkUb1Gc2"
      )
      .then(
        (result) => {
          Swal.fire("Berhasil!", "Email berhasil dikirim.", "success");
          setShow(false);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };

  //   const hideModal = () => {
  //     setShow(false);
  //   };
  //   const Modal = ({ handleClose, details }) => {
  //     return (
  //       <div className="fixed top-0 left-0, w-full h-full   bg-opacity-50 bg-gray-500">
  //         <div className="fixed w-1/5 h-auto bg-white -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4">
  //           <form ref={form} onSubmit={sendEmail}>
  //             <div className="flex flex-col items-start p-4 overflow-y-auto">
  //               {data.users
  //                 .filter((user) => {
  //                   return (
  //                     (details.pendidikan === user.pendidikan ||
  //                       details.pendidikan === "umum") &&
  //                     (details.domisili === user.domisili ||
  //                       details.domisili === "semua")
  //                   );
  //                 })
  //                 .map((user, index) => (
  //                   <div key={index}>
  //                     <input
  //                       type="text"
  //                       name="to_email"
  //                       id="to_email"
  //                       className="hidden "
  //                       value={user.email}
  //                       readOnly
  //                     />
  //                   </div>
  //                 ))}
  //               <input
  //                 type="text"
  //                 name="link"
  //                 id="link"
  //                 className="hidden "
  //                 value={details.link}
  //                 readOnly
  //               />
  //               <label
  //                 htmlFor="input-label"
  //                 className="block mb-2 text-sm font-medium "
  //               >
  //                 Nama beasiswa
  //               </label>
  //               <input
  //                 type="text"
  //                 name="nama_beasiswa"
  //                 id="nama_beasiswa"
  //                 value={details.nama}
  //                 readOnly
  //                 className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 "
  //               />
  //             </div>
  //             <div className="flex flex-col items-start p-4 overflow-y-auto">
  //               <label
  //                 htmlFor="input-label"
  //                 className="block mb-2 text-sm font-medium "
  //               >
  //                 Pesan
  //               </label>
  //               <textarea
  //                 className="block w-full px-4 py-3 text-sm border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500"
  //                 placeholder="pesan"
  //                 name="message"
  //                 id="message"
  //               />
  //             </div>
  //             <div className="flex items-center justify-end px-4 py-3 border-t gap-x-2 ">
  //               <button
  //                 type="button"
  //                 className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-gray-700 align-middle transition-all bg-white border rounded-md shadow-sm hs-dropdown-toggle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 "
  //                 onClick={handleClose}
  //               >
  //                 batal
  //               </button>
  //               <button
  //                 type="submit"
  //                 className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  //               >
  //                 Bagikan
  //               </button>
  //             </div>
  //           </form>
  //         </div>
  //       </div>
  //     );
  //   };
  return (
    <>
      <div className="px-10 mt-10">
        <h1 className="mb-5 text-3xl font-bold">List Beasiswa</h1>

        <table className="w-full divide-y divide-gray-200 table-fixed ">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase"
              >
                Gambar
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase "
              >
                Nama
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase"
              >
                domisili
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase"
              >
                Pendidikan
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase"
              >
                registrasi
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase hs-tooltip"
              >
                <div className=" hs-tooltip-toggle">
                  Deadline (&#63;)
                  <span
                    className="absolute z-10 invisible inline-block px-2 py-1 text-xs font-medium text-white transition-opacity bg-gray-900 rounded-md shadow-sm opacity-0 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible dark:bg-slate-700"
                    role="tooltip"
                  >
                    <span className="text-yellow-400 ">Kuning</span> : Kurang
                    dari 7 Hari <br />
                    <span className="text-red-400 ">Merah</span> : sudah lewat
                    deadline <br />
                  </span>
                </div>
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase"
              >
                action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {dummyData.data.beasiswa
              ?.slice(firstPostIndex, lastPostIndex)
              .map((item) => (
                <tr
                  key={item.id}
                  className={
                    getNumberOfDays(item.deadline_date) < 0
                      ? "bg-gray-200"
                      : "bg-white"
                  }
                >
                  <td className="  w-full h-[100px]  p-2whitespace-nowrap text-sm font-medium text-gray-800 ">
                    <img
                      src={item.img_url}
                      alt=""
                      className="object-cover w-full h-full "
                    />
                  </td>
                  <td className="px-6 py-4 overflow-x-auto text-sm text-gray-800 whitespace-nowrap">
                    <p>{item.nama}</p>
                  </td>
                  <td className="px-6 py-4 overflow-x-auto text-sm text-gray-800 whitespace-nowrap">
                    <p>{item.domisili}</p>
                  </td>
                  <td className="px-6 py-4 overflow-x-auto text-sm text-gray-800 whitespace-nowrap">
                    <p>{item.pendidikan}</p>
                  </td>
                  <td className="px-6 py-4 overflow-x-auto text-sm text-gray-800 whitespace-nowrap">
                    <p>{Moment(item.reg_date).format("MMM Do YY")}</p>
                  </td>
                  <td className="px-6 py-4 overflow-x-auto text-sm text-gray-800 whitespace-nowrap">
                    {getNumberOfDays(item.deadline_date) < 7 ? (
                      getNumberOfDays(item.deadline_date) < 0 ? (
                        <p className="font-bold text-red-400 ">
                          {Moment(item.deadline_date).format("MMM Do YY")}
                        </p>
                      ) : (
                        <p className="font-bold text-yellow-400">
                          {Moment(item.deadline_date).format("MMM Do YY")}
                        </p>
                      )
                    ) : (
                      <p>{Moment(item.deadline_date).format("MMM Do YY")}</p>
                    )}
                  </td>

                  <td className="py-4 text-sm font-medium text-right whitespace-nowrap">
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        to={`/adminPage/edit/${item.id}`}
                        state={{ data: item }}
                        className="text-blue-500"
                      >
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-full gap-2 px-2 py-2 text-xs font-normal text-white transition-all bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 "
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 px-2 py-2 text-xs font-normal text-white transition-all bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 "
                        // onClick={() => handleDeleteBeasiswa(item.id)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/beasiswa/${item.id}`}
                        state={{ data: item }}
                        className="flex items-center justify-center text-blue-500"
                      >
                        View
                      </Link>
                      <button
                        className="inline-flex items-center justify-center gap-2 px-2 py-2 text-xs font-normal text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 "
                        onClick={() => handleClick(item)}
                        //    disabled
                      >
                        Bagikan
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex justify-end ">
          <Pagination
            totalPosts={dummyData.data.beasiswa.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurentPage}
          />
        </div>
      </div>
      {/* {show && <Modal details={selectedData} handleClose={hideModal} />} */}
    </>
  );
}
