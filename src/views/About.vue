<template>
  <div class="full-wrapper">
    
  
      <div class="about-wrap">
         <vh-copy class="para-desktop copy-button"
      :data="'0x295B42684F90c77DA7ea46336001010F2791Ec8c'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      Contract Address
</vh-copy><br>
 <h1>THE XI PROTOCOL</h1>
<br><p>
IS COMPRISED OF MINTING FOR AN EVENTUALLY TERMINATING RESERVATION OF XI UTILITY TOKENS, AND STAKING FOR AN EVENTUALLY CORRECT METAORACLE WITH XI UTILITY TOKENS
<br><br> ETH used to mint XI will be used over the duration of the countdown:<br>
50% SWAP ETH/XI on UNISWAP<br>
50% TEAM</p>    <br>    <router-link :to="{ name: 'home' }" >
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

