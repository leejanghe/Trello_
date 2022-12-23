import { atom, selector } from "recoil";

// 1. Create an atom

export const minuteState = atom({
  key: "minutes",
  default: 0,
});
// 3. Create a selector
// This selector will be used to convert minutes to hours
export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
