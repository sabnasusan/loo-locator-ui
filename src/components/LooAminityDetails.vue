<template>
  <!-- The Aminities holder  -->
  <div>
    <LooLoader v-if="loader"></LooLoader>
    <div v-if="!loader" class="loo-map container-fluid">
      <div class="loo-map-header row">
        <!-- Importing the Navigation Bar Component -->
        <TheNavBar>
          <div class="d-flex nav-wrap">
            <div class="loo-map-back-btn">
              <LooBackButton :onClick="goBack"></LooBackButton>
            </div>
            <div class="loo-map-header">
              <h1 class="loo-map-heading mt-4">{{ constants.APP_NAME }}</h1>
            </div>
            <div class="loo-map-menu mx-2">
              <LooMenu @clicked="getLooDetails" :data="categories"></LooMenu>
            </div>
          </div>
        </TheNavBar>
      </div>
      <!-- Importing the Map View Component-->
      <div class="loo-map-way-container" v-if="this.showMap">
        <LooAminity :data="aminityDetails"></LooAminity>
      </div>
      <div class="loo-map-way-container" v-if="!this.showMap">
        <div v-if="!this.showMap" class="py-5 px-2 loo-map-not-available">
          {{ constants.NOT_AVAILABLE }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="@/controllers/LooAminitiyDetails.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/loomap.scss";
</style>
</template>