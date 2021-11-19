<template>
  <div class="full-wrapper">
    <jj-parallax-card class="plain-card" lightColor="transparent" style="" @click="click">
      <div slot="front">
     <div class="card-title">
      <div class="primary-title">Single Stake Ψ | Ω</div>
      <div class="secondary-title">N hrs, N mins to next rebase</div>
     </div>

     <div class="row-distributed mt-5 mb-7">
      <div class="card-data-section">
        <div class="card-data-section-title">APY</div>
        <div class="card-data-section-value">7289345%</div>
      </div>
      <div class="card-data-section">
        <div class="card-data-section-title">Total Value Deposited</div>
        <div class="card-data-section-value">7289345%</div>
      </div>
      <div class="card-data-section">
        <div class="card-data-section-title">Current Index</div>
        <div class="card-data-section-value">7289345%</div>
      </div>
     </div>
     <div class="row-distributed mt-5 mb-5">
     <div class="button">Connect Wallet</div>
     </div>
     <div class="row-distributed" style="font-size:0.75rem;color:#A3A3A3;">Connect your wallet to stake SPA</div>
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
<script src="../assets/water.js"></script>

