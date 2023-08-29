<template>
  <div class="loo-menu">
    <div id="mySidenav" class="sidenav" :class="this.status === 'open-menu' ? 'open-menu' :'close-menu'">
      <h3 class="menu-main-heading">{{ constants.APP_NAME }}
        <div class="closebtn" @click="closeNav()"><img src="../assets/close-icon.png" alt="map"
            class="loo-map-show-way-map" /></div>
      </h3>
      <div class="menu-container">
        <h6 class="menu-heading">{{ constants.AMINITIES_PROVIDED }}</h6>
        <div class="menu-items">
          <div @click="closeMenu(item.id)" v-for="item in data" class="menu-item">
            <img v-if="item.label === 'Parents rooms'" src="../assets/parent-icon.png" alt="map" class="parent-icon" />
            <img v-if="item.label === 'Accessible toilets'" src="../assets/accessible-icon.png" alt="map"
              class="accessible-icon" />
            <img v-if="item.label === 'Ladies toilets'" src="../assets/ladies-icon.png" alt="map"
              class="ladies-icon" /></span>
            <span>
              <img v-if="item.label === 'Mens toilets'" src="../assets/mens-icon.png" alt="map"
                class="men-icon" /></span>
            {{ item.label }}
          </div>
          <div class="menu-item py-5">
            <span>
              <img src="../assets/contact-us.png" alt="map" class="contact-us" /></span>
            {{ constants.CONTACT_US }}
          </div>
        </div>
      </div>
    </div>

    <div id="main" :class="this.status === 'open' ? 'open-menu' :'close-menu'">
      <span class="menu-bar" @click="openNav()">&#9776;</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "../styles/components/loomenu.scss";
</style>

<script lang="ts" src="@/controllers/LooMenu.ts"></script>