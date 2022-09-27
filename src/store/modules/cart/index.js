import cart from '../../../data/cart'
const state = {
  cartItems: cart,
  showDrawer: false,
}
const mutations = {
  UPDATE_CART_ITEMS (state, payload) {
    state.cartItems = payload;
  },
  SET_SHOW_DRAWER (state, value) {
    state.showDrawer = value;
  }
}
const actions = {
  getCartItems ({ commit }) {
    // axios.get('/api/cart').then((response) => {
      commit('UPDATE_CART_ITEMS', cart)
    // });
  },
  addCartItem ({ commit }, cartItem) {
    // axios.post('/api/cart', cartItem).then((response) => {
      // let cartNew = cart.push(cartItem)
      let cartClone = [...state.cartItems];
      const newCartProduct = { 
        id: cartItem.id,
        title: cartItem.title,
        description: cartItem.description,
        price: cartItem.price,
        image_tag: cartItem.image_tag, 
        quantity: 1 
      };
      let cartProductExists = false;
      cartClone.map((cartProduct) => {
        if (cartProduct.id === newCartProduct.id) {
          cartProduct.quantity++;
          cartProductExists = true;
        }
      });
      if (!cartProductExists) cartClone.push(newCartProduct);
      commit('UPDATE_CART_ITEMS', cartClone)
  },
  removeCartItem ({ commit }, cartItem) {
    let cartClone = [...state.cartItems];
    cartClone.map((cartProduct) => {
      if (cartProduct.id === cartItem.id && cartProduct.quantity > 1) {
        cartProduct.quantity--;
      } else if (cartProduct.id === cartItem.id && cartProduct.quantity === 1) {
        const cartIndexToRemove = cartClone.findIndex(cartProduct => cartProduct.id === cartItem.id);
        cartClone.splice(cartIndexToRemove, 1);
      }
    });
      commit('UPDATE_CART_ITEMS', cartClone)
  },
  removeAllCartItems ({ commit }) {
    let cart = [];
    commit('UPDATE_CART_ITEMS', cart)
  }
}
const getters = {
  getShowDrawer: state => state.showDrawer,
  cartItems: state => state.cartItems,
  cartTotal: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return (cartItem.quantity * cartItem.price) + acc;
    }, 0).toFixed(2);
  },
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  }
}

const cartModule = {
  state,
  mutations,
  actions,
  getters
}
export default cartModule;