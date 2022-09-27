<template>
  <div id="cart">
    <button class="btn__close delete" @click="hideModal">X</button>
    <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
      Add some items to the cart!
    </p>
    <ul>
      <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id">
          <CartListItem :cartItem="cartItem" :quantity="cartItem.quantity"/>
      </li>
      <div class="notification is-success">
        <!-- <button class="delete"></button> -->
        <p>
          Total Price:
          <span class="has-text-weight-bold">${{ cartTotal }}</span>
        </p>
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br>
    </ul>
    <div class="buttons">
     
 <button class="button is-danger is-outlined" @click="removeAllCartItems">
    <span>Clear Cart</span>
  </button>
       </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "./Cart_List_Item";
export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity", "getShowDrawer"]),
  },
  created() {
    // this.$store.dispatch("getCartItems");
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
    hideModal() {
      this.$store.commit('SET_SHOW_DRAWER', !this.getShowDrawer);
    }
  }
};
</script>