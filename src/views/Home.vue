<template>
  <div style="margin:auto;" class="full-wrapper">
 

<jj-parallax-card class="data-card" lightColor="transparent" style="background:transparent;" @click="click">
      <div slot="front">
      <img style="margin:auto; width:256px;display:flex;flex-flow:row;justify-content:center;" src="../assets/favicon.svg" alt="">
     <h1 style="text-align:center;margin-top:1rem;"></h1>
      </div>
</jj-parallax-card>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import JJParallaxCard from 'jj-parallax-card'
export default {
  data() {
    return {
      form: {
        quantity: ''
      },
      modalLoginOpen: false,
      modalMakepotionOpen: false
    };
  },
 components: {
  'jj-parallax-card':JJParallaxCard,
    
  },
};
</script>

<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

