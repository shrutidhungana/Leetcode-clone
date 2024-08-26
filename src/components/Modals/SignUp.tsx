import React, { useEffect, useState } from "react";
import { authModalState } from "@/atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import { LuLoader2 } from "react-icons/lu";
import { toast } from "react-toastify";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };
  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    password: "",
  });
const router = useRouter();
  const [createUserWithEmailAndPassword,, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName)
      return toast.warning("Please fill all fields", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      router.push("/");
      if (!newUser) return;
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <form className="space-y-6 px-6 py-4" onSubmit={handleRegister}>
      <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@company.com"
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label
          htmlFor="displayName"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Display Name
        </label>
        <input
          type="displayName"
          name="displayName"
          id="displayName"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="John Doe"
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="*******"
          onChange={handleChangeInput}
        />
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <LuLoader2 className="animate-spin mr-2" />
            Registering...
          </div>
        ) : (
          "Register"
        )}
      </button>

      <div className="text-sm font-medium text-gray-300">
        Already have an account?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={handleClick}
        >
          Log In
        </a>
      </div>
    </form>
  );
};
export default SignUp;
