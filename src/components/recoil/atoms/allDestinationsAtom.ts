import { atom } from "recoil";

export const allDestinationsAtom = atom({
  key: "allDestinationsAtom",
  default: [{ name: "", code: "" }],
});
