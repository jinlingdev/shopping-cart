<template>
  <div>
    <DrawerCart
    :show="showDrawer"
    :pos="pos"
    :tran="tran"
    @change-show="changeDrawerShow"
    @on-hide="onHide"
    @on-show="onShow"
  >
    <NavBar/>
    <ProductList></ProductList>
    <template v-slot:DrawerCart>
      <CartList></CartList>
    </template>
    <!-- 
    <button v-on:click="directionFlip">directionChange</button><br><br>
    <button v-on:click="tranFlip">tranChange</button><br><br>
     -->
  </DrawerCart>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import NavBar from "./components/core/Nav_Bar";
import DrawerCart from "./components/core/Drawer_Cart.vue";
import CartList from "./components/cart/Cart_List.vue";
import ProductList from './components/product/Product_List.vue';
import './assets/css/style.scss';

export default {
  name: "App",
  data() {
    return {
      pos: "left",
      tran: "overlay",
      drawerShow: false,
    };
  },
  methods: {
    directionFlip() {
      this.pos = this.pos == "left" ? "right" : "left";
      setTimeout(() => {
        this.drawerToggle();
      }, 500);
    },
    tranFlip() {
      this.tran = this.tran == "overlay" ? "push" : "overlay";

      setTimeout(() => {
        this.drawerToggle();
      }, 0);
    },
    drawerToggle() {
      this.drawerShow = !this.drawerShow;
    },
    onHide() {
      this.$store.commit('SET_SHOW_DRAWER', false)
    },
    changeDrawerShow(state) {
      this.drawerShow = state;
      this.$store.commit('SET_SHOW_DRAWER', false)
      console.log("drawer was changed from components");
    },
    onShow() {
      console.log("show");
    },
  },
  components: {
    NavBar,
    DrawerCart,
    CartList,
    ProductList
  },
  computed: {
    ...mapGetters(["productItems"]),
    ...mapGetters({
      showDrawer: 'getShowDrawer'
    })
  },
  created() {
    this.$store.dispatch("getProductItems");
  }
};
</script>