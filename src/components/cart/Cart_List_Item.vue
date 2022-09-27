<template>
  <div class="box">
    <div class="cart-item__details">
      <p class="is-inline">{{cartItem.title}}</p>
      <div>
        <span class="cart-item--price has-text-info has-text-weight-bold">
          ${{cartItem.price}} x {{quantity}}
        </span>
        
        <span>
          <!-- <i class="fa fa-arrow-circle-up cart-item__modify" @click="addCartItem(cartItem)">+</i> -->
          <!-- <i class="fa fa-arrow-circle-down cart-item__modify" @click="removeCartItem(cartItem)">-</i> -->
        </span>
      </div>
      
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'CartListItem',
  props: {
    cartItem: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions([
      'addCartItem',
      'removeCartItem'
    ])
  }
}
</script>