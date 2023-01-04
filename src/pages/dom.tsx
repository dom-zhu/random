import { fakeAtom, useFakeAtom } from "@/pages/todo-list/myStore";
import { createContext, useContext } from "react";

const myAtom = fakeAtom("myAtom");
const countAtom = fakeAtom(0);

const Thing = () => {
  const [state, setState] = useFakeAtom(myAtom);

  const handleClick = () => {
    setState("doggo :)");
  };

  return (
    <div className="">
      parent currently sees state as {state}
      <button onClick={handleClick} className="p-3 bg-cyan-400 rounded-md">
        click me
      </button>
      <Child />
    </div>
  );
};

const Child = () => {
  const [state, setState] = useFakeAtom(myAtom);
  const [count, setCount] = useFakeAtom(countAtom);

  const handleClick = () => {
    setState((prev) => {
      return prev + "abc";
    });
  };

  return (
    <div>
      {/* hello parent state is currently {state} */}
      <button onClick={handleClick} className="p-3 bg-pink-400 rounded-md">
        click me
      </button>
    </div>
  );
};

export default function Dom() {
  return (
    <div className="grid w-full h-full place-items-center">
      <div className="m-auto">hello this is dom file</div>
    </div>
  );
}
