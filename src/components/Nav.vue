<template>
  <nav>
    <div class="icon-area">      
    <router-link style="text-decoration:unset!important;" :to="{ name: 'home' }" >
    <img style="padding:32px;16px;margin-bottom:0rem;padding-bottom:8px;" src="../assets/favicon.svg" alt="">
    <div class="nav-item" >Grail DAO
    </div>
    </router-link></div>
      <div class="links">
      <div class="dapp-nav">
      <router-link :to="{ name: 'dashboard' }" >
      <div class="dapp-nav-item"><img src="https://cdn-icons-png.flaticon.com/512/107/107784.png" class="dapp-nav-icon" alt="">Dashboard</div>
    </router-link> <router-link :to="{ name: 'stake' }" >
      <div class="dapp-nav-item"><img src="https://cdn-icons-png.flaticon.com/512/2736/2736622.png" class="dapp-nav-icon" alt="">Stake</div>
    </router-link> <router-link :to="{ name: 'bond' }" >
      <div class="dapp-nav-item"><img src="https://cdn-icons-png.flaticon.com/512/1001/1001371.png" class="dapp-nav-icon" alt="">Bond</div>
    </router-link>
    </div>
    </div>
    <div class="info">
    <div class="dapp-nav-item">
    <img src="https://cdn-icons-png.flaticon.com/512/1008/1008898.png" class="dapp-nav-icon" alt="">Governance
    </div>
    <div class="dapp-nav-item">
    <img src="https://cdn-icons-png.flaticon.com/512/2258/2258853.png" class="dapp-nav-icon" alt="">Docs
    </div>
    </div>
    <div class="socials">
    <a><img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" style="width:32px;filter:invert(1);" alt=""></a>
    <a><img src="https://cdn-icons-png.flaticon.com/512/5968/5968898.png" style="width:32px;filter:invert(1);" alt=""></a>
    <a><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" style="width:32px;filter:invert(1);" alt=""></a>
    </div>
  </nav>
</template>


<script>
import { mapState } from 'vuex';
import { shorten } from '@/helpers/utils';

export default {
  data() {
    return {
      modalLoginOpen: false
    };
  },

  computed: mapState({
    name: state => state.settings.name,
    address: state => state.settings.address
  }),
  methods: {
    shorten
  }
};
</script>
<style>
.icon-area{
  display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
width: 100%;
align-items: center;
text-decoration: none;
padding: 30px 0 10px;
}
.links{    
  min-height: 35vh;
  display: flex;
  align-items: center;}
.dapp-nav-item{
      margin-top: .7rem;
    margin-left: 33px;
    align-items: center;
    margin-bottom: .5rem;
    color:white;
    font-weight:700;
}
.nav-item{
    font-size:1.5rem;
    align-items: center;
    color:white;
    font-weight:700;
}
.dapp-nav{
  display: flex;
  flex-flow: column;
}
.icon-area{padding-top:2rem;}
.router-link-active{
  text-decoration:underline;
color:white;}
.dapp-nav-icon{
    width: 20px;
    height: 20px;
    margin-right: 12px;
    vertical-align: -4px;
    filter:invert(1);
}
</style>
