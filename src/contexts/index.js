import { createContext } from "react";
import {rootStore} from "../stores/";



export const storeContext = createContext(rootStore);