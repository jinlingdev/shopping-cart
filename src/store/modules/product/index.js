import product from "../../../data/product";

const state = {
  productItems: [],
};
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
};
const actions = {
  getProductItems({ commit }) {
    // axios.get(`/api/products`).then((response) => {
      commit("UPDATE_PRODUCT_ITEMS", product);
    // });
  },
};
const getters = {
  productItems: (state) => state.productItems,
  productItemById: (state) => (id) => {
    return state.productItems.find((productItem) => productItem.id === id);
  },
};
const productModule = {
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
