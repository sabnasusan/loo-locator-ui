<template>
  <!-- The maps to loo is loaded  here -->
  <div class="loo-map-way container">
    <div class="loo-map-way-holder">
      <div class="d-flex justify-content-center mb-4">
        <div class="loo-map-for-icon mb-md-1">
          <img v-if="data[0].category_id === constants.PARENT_ID" src="../assets/parenticon.png" alt="map" class="parent-icon" />
          <img v-if="data[0].category_id === constants.ACCESSIBLE_ID" src="../assets/accessible-icon.png" alt="map" class="accessible-icon" />
          <img v-if="data[0].category_id === constants.LADIES_ID" src="../assets/ladies-icon.png" alt="map" class="ladies-icon" />
          <img v-if="data[0].category_id === constants.MENS_ID" src="../assets/mens-icon.png" alt="map" class="men-icon" />
        </div>
        <div class="loo-map-show-way">
          <h2 class="loo-map-show-way-title">
            {{ constants.SHOW_WAY }}
          </h2>
          <p class="loo-map-show-way-desc" v-if="data[0]">
            {{ data[0].description }}
          </p>
        </div>
      </div>
      <div class="loo-map-show-map">
        <img src="../assets/map.png" alt="map" class="loo-map-show-way-map" />
      </div>
    </div>
    <div class="loo-map-way-no-map">
      <p class="loo-map-way-no-map-title">
        {{ constants.HATE_MAPS }}
      </p>
    </div>
    <div class="loo-map-way-live-guide">
      <LooLargeButton :onClick="actionhandle">
        {{ constants.LIVE_GUIDE }}</LooLargeButton>
    </div>
    <div class="loo-map-way-live-guide-btn">
      <LooButton :onClick="toAminities">
        {{ constants.AMENITY_DETAILS }}</LooButton>
    </div>
  </div>
</template>

<script lang="ts" src="@/controllers/LooMapWay.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/loomapway.scss";
</style>