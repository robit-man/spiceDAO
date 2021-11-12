<template>
  <div class="full-wrapper">
    
  
      <div class="about-wrap">
       <a href="mailto:xiprotocol@protonmail.com">
       Contact
       </a>
       
       <br><br>
         <vh-copy class=" copy-button"
      :data="'0x295B42684F90c77DA7ea46336001010F2791Ec8c'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      Contract Address
</vh-copy><br><br>
<p>

The XI Protocol implements a Decentralized Supercomputer through Cascade Computing for Eventually Correct Metaoracles. By implementing sequential anti-sybil and computing phases with XI staking and oracle commit-reveal schema, the architecture outsources multi-agent distributed consensus.
<br><br>
Applications of the XI Protocol include utility for purchasing time on satellite advertising and utility as rewards for solutions to open mathematical problems. 
<br><br>
The XI Protocol intends to establish an interplanetary decentralized platform for providing financial incentives to outsourced forecasting of the truth and participate in new economic models for questions and answers.
</p>    <br>    <router-link :to="{ name: 'home' }" >
     <img src="~/@/assets/xi_token_icon_v0.1-48.png" style="height:64px;filter:invert(1);" alt="">
    </router-link></div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
  },
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

