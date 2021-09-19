import { createStore } from "vuex";
import { StateRoot } from "@/types";
import mockStore from "../mocks/mockStore";

const store = createStore<StateRoot>(mockStore);

export default store;
