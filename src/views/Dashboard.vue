<template>
  <div class="full-wrapper">
    <jj-parallax-card  lightColor="transparent" style="" @click="click">
      <div slot="front">
      <img style="max-width:256px;margin:auto;" src="../assets/favicon.svg" alt="">
     <h1 style="text-align:center;margin-top:1rem;">DASHBOARD</h1>
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

