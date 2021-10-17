import { createStore } from "vuex";
import { StateRoot } from "@/infrastructure/store/store.types";
import mockStore from "../../_mocks/mockStore";

const store = createStore<StateRoot>(mockStore);

export default store;
