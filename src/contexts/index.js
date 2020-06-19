import { createContext } from "react";
import Store from "../stores/";

const store = new Store();
export const storeContext = createContext(store);