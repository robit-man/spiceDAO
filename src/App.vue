<template>
    <div id="app" class="" style="">
  <header>
  <div class="button-row-header">
  <div class="ticker-button"><b>GRA</b></div>
  <div class="wallet-button">Connect Wallet</div>
  <div class="mode-button"></div>
  </div>
  </header>
    <div class="sidebar">
    <Nav></Nav>
    </div>

      <VueLoadingIndicator v-if="settings.loading" class="overlay big" />
      <div class="app-window" v-else>
      
        <router-view :key="$route.path" />

      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Nav from './components/Nav.vue';

export default {
  computed: {
    ...mapState(['settings'])
  },
  methods: {
    ...mapActions(['init'])
  },
  async created() {
    this.init();
  }
};
</script>
