<template>
  <!-- container -->
  <div class="vue-drawer">
    <div :style="{'transform': 'translate3d('+translateX+'px,0,0)'}"
    class="main">
    <!-- main body -->
    <slot></slot>
    <!-- mask -->
    <div class="mask" :class="show ? 'active' : ''" @click="hideMask"></div>
  </div>
  <div ref="DrawerCart" class="drawer" 
  :class="[pos!='left' ? 'drawer-right' : 'drawer-left', show ? 'active' : '']" >
    <!-- drawer -->
    <slot name="DrawerCart"></slot>
  </div>
</div> 
</template>

<script scoped>

  import '../../assets/css/_cart-drawer.scss';

  export default {
   props: {
     show: {
       type: Boolean,
       default: false
     },
     pos: {
       type: String,
       default: 'left'
     },
     tran: {
       type: String,
       default: 'overlay'
     }
   },
   data() {
     return {
      drawerWidth:0,
      translateX:0
    }
  },
  watch:{
    show:function(){
      //listener
      if (!this.show)
        this.$emit('on-hide');
      else
        this.$emit('on-show');

      //transition
      if (this.tran=='overlay') return;
      if (!this.show)
        this.translateX=0
      else
        this.translateX=this.pos=='left'?this.drawerWidth:-this.drawerWidth
    }
  },
  mounted(){
    this.$nextTick(function () {
      // this.drawerWidth=this.$refs.drawer.clientWidth
  })
  },
  methods: {
   hideMask() {
     // this.show = false;
     this.$emit('change-show',false)
   }
 }
}
</script>