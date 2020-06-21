import { createContext } from "react";
import {rootStore} from "../stores/";
import { dataStore } from "../app/content/tracker/stores/DataStore";





export const storeContext = createContext(rootStore);