import Users from "@/pages/users";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  router.push("/users");

  return (
    <>
      404
      {/* <div className="w-full h-full bg-gray-300 grid justify-center ">
        <div className="bg-white rounded-3xl text-center px-5 py-4 my-10 w-96">
          <Users />
        </div>
      </div> */}
    </>
  );
}
