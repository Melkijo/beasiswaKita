import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { gql, useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../components/Atoms";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const GET_USERS = gql`
  subscription MyQuery {
    users {
      id
      email
      password
      domisili
      pendidikan
      namaDepan
      namaBelakang
    }
  }
`;

export default function LoginPage() {
  const { loading, error, data } = useSubscription(GET_USERS);
  const navigate = useNavigate();
  const [authState, setAuthState] = useAtom(authAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function login(userx, tokenx) {
    // set the token in cookies
    Cookies.set("auth_token", tokenx, { expires: 1 });
    localStorage.setItem("userData", JSON.stringify(userx));

    // set the user state
    setAuthState({ user: userx, token: tokenx });
  }
  const onSubmit = (input) => {
    if (
      input.email == import.meta.env.VITE_ADMIN_EMAIL &&
      input.password === import.meta.env.VITE_ADMIN_PASS
    ) {
      Swal.fire({
        icon: "success",
        title: `Selamat Datang Admin`,
      });
      Cookies.set("auth_token", import.meta.env.VITE_ADMIN_COOK, {
        expires: 1,
      });
      const adminData = { namaDepan: "admin", namaBelakang: "d" };
      localStorage.setItem("userData", JSON.stringify(adminData));
      setAuthState({
        user: adminData,
        token: import.meta.env.VITE_ADMIN_COOK,
      });

      navigate("/adminPage");
    } else {
      const match = data.users.find((user) => {
        if (user.email === input.email && user.password === input.password) {
          login(user, user.id);
          return true;
        }
      });

      if (match) {
        Swal.fire({
          icon: "success",
          title: `Selamat Datang`,
        });

        navigate("/userPage/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Data yang anda masukan salah!",
        });
      }
    }
  };
  //   if (authState.token !== undefined) {
  //     return navigate("/");
  //   }
  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;

  return (
    <div className="flex items-center justify-center gap-20 mx-auto ">
      <div className="px-4 ">
        <Link to={"/"}>
          <h3 className="text-6xl font-bold ">
            BEASISWA<span className="text-blue-500 ">KITA</span>
          </h3>
          <p className="text-3xl">Dari kita untuk kita</p>
        </Link>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-16 ">
          <div className="hs-tooltip ">
            <div className=" hs-tooltip-toggle">
              <p className="mb-5 text-3xl font-bold">
                Masuk <span className="text-lg font-medium">(&#63;)</span>
              </p>

              <span
                className="absolute z-10 invisible inline-block p-1 text-xs font-medium text-white transition-opacity bg-gray-900 rounded-md shadow-sm opacity-0 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible dark:bg-slate-700"
                role="tooltip"
              >
                admin@gmail.com <br />
                admin
              </span>
            </div>
          </div>

          {/* <h3 className="mb-5 text-3xl font-bold">Masuk</h3> */}
          <label
            htmlFor="input-label"
            className="block mb-2 font-medium text-medium "
          >
            Email
          </label>
          <input
            type="email"
            id="input-label"
            {...register("email", { required: true })}
            className="block w-full px-4 py-3 border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
            placeholder="you@site.com"
          />
          {errors.email && <p>email harus diisi</p>}

          <label
            htmlFor="input-label"
            className="block mt-5 mb-2 font-medium text-medium "
          >
            Password
          </label>
          <input
            type="password"
            id="pass-label"
            {...register("password", { required: true })}
            className="block w-full px-4 py-3 border border-gray-200 rounded-md text-medium focus:border-blue-500 focus:ring-blue-500 "
            placeholder="password"
          />
          {errors.password && <p>password harus diisi</p>}

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-5 py-3 my-5 text-sm font-semibold text-white transition-all bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Masuk
          </button>
        </form>
        <h5>
          Tidak punya akun?{" "}
          <Link to="/daftar" className="text-blue-500 ">
            daftar
          </Link>
        </h5>
      </div>
      <div className="">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/beasiswakita-3e322.appspot.com/o/utama%2Flogin.jpg?alt=media&token=a4603db9-b9b6-45ec-9a40-12affe5eb243"
          alt=""
          className="object-cover h-screen "
        />
      </div>
    </div>
  );
}
