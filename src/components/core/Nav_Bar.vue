<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button class="button is-danger is-outlined" @click="removeAllCartItems">
              <span>Clear Cart</span>
            </button>
            <button v-on:click="click" class="button is-warning">
              Cart <span> ({{ cartQuantity }})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["cartQuantity", "getShowDrawer"]),
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
    click() {
      this.$store.commit('SET_SHOW_DRAWER', !this.getShowDrawer);
    }
  },
  created() {
    this.$store.dispatch("getCartItems");
  }
};
</script>
