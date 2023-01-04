import EventEmitter from "events";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const store = new Map();

export const fakeAtom = <T extends unknown>(initialValue: T): Atom<T> => {
  const id = v4();
  const atom: Atom<T> = {
    id,
    emitter: new EventEmitter(),
  };

  store.set(id, initialValue);

  return atom;
};

type Atom<T> = {
  id: string;
  emitter: EventEmitter;
};

type SetterVariant<T> = (prev: T) => T;
type Setter<T> = T | SetterVariant<T>;

export const useFakeAtom = <T extends unknown>(atom: Atom<T>) => {
  const [val, setVal] = useState<T>(() => store.get(atom.id));

  // keep useState in sync with external store
  useEffect(() => {
    const callback = (val: T) => setVal(val);
    atom.emitter.on("updated", callback);
    return () => {
      atom.emitter.removeListener("updated", callback);
    };
  }, []);

  const setter = (val: Setter<T>) => {
    // is setter variant
    let newVal = val;
    if (typeof val === "function") {
      const currentValue = store.get(atom.id) as T;
      const returnVal = (val as SetterVariant<T>)(currentValue);
      store.set(atom.id, returnVal);
      newVal = returnVal;
    }

    store.set(atom.id, newVal);
    atom.emitter.emit("updated", newVal);
  };

  return [val, setter] as const;
};
