import { Dom } from "@/pages/Dom";
import { TodoList } from "@/pages/todo-list/TodoList";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full h-full bg-gray-300 grid justify-center ">
        <div className="bg-white rounded-3xl text-center px-5 py-4 mt-10 h-[800px] w-96">
          {/* <h1 className="text-purple-700 text-3xl mb-2">TodoList</h1> */}
          {/* <TodoList /> */}
          <Dom />
        </div>
      </div>
    </>
  );
}
