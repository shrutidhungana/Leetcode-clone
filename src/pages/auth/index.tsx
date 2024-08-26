import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import AuthModal from "@/components/Modals/AuthModal";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import { LuLoader2 } from "react-icons/lu";
import Image from "next/image";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);
  const [user, loading] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  return (
    <>
      {pageLoading ? (
        <div className="flex items-center justify-center h-screen">
          <LuLoader2 className="animate-spin text-7xl text-brand-orange" />
        </div>
      ) : (
        <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
          <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
              <Image src="/hero.png" alt="Hero img" width={700} height={700} />
            </div>
            {authModal.isOpen && <AuthModal />}
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
