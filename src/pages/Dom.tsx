import { fakeAtom, useFakeAtom } from "@/pages/todo-list/myStore";
import { createContext, useContext } from "react";

const myAtom = fakeAtom("myAtom");
const countAtom = fakeAtom(0);

const DomContext = createContext("potato");

export const Dom = () => {
  const [state, setState] = useFakeAtom(myAtom);
  const value = useContext(DomContext);

  const handleClick = () => {
    setState("doggo :)");
  };

  return (
    <div className="">
      <DomContext.Provider value="potato">
        parent currently sees state as {state}
        <button onClick={handleClick} className="p-3 bg-cyan-400 rounded-md">
          click me
        </button>
      </DomContext.Provider>
      <Child />
    </div>
  );
};

const Child = () => {
  const [state, setState] = useFakeAtom(myAtom);
  const [count, setCount] = useFakeAtom(countAtom);
  const value = useContext(DomContext);

  const handleClick = () => {
    setState((prev) => {
      return prev + "abc";
    });
  };

  return (
    <div>
      hello local count state is currently {value}
      {/* hello parent state is currently {state} */}
      <button onClick={handleClick} className="p-3 bg-pink-400 rounded-md">
        click me
      </button>
    </div>
  );
};
