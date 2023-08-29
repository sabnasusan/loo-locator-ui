<template>
  <!-- The Aminities in each loo -->
  <div class="loo-aminity container">
    <div class="loo-map-way-holder">
      <div class="d-flex justify-content-center mb-4">
        <div class="loo-map-for-icon mb-md-1">
          <img v-if="looDetail[0].category_id === constants.PARENT_ID" src="../assets/parenticon.png" alt="parent-icon"
            class="parent-icon" />
          <img v-if="looDetail[0].category_id === constants.ACCESSIBLE_ID" src="../assets/accessible-icon.png" alt="accessible-icon"
            class="accessible-icon" />
          <img v-if="looDetail[0].category_id === constants.LADIES_ID" src="../assets/ladies-icon.png" alt="ladies-icon"
            class="ladies-icon" />
          <img v-if="looDetail[0].category_id === constants.MENS_ID" src="../assets/mens-icon.png" alt="mens-icon" class="men-icon" />
        </div>
        <div class="loo-map-show-way">
          <h2 class="loo-map-show-way-title">
            {{ constants.AMENITY_TITLE }}
          </h2>
          <p class="loo-map-show-way-desc" v-if="looDetail[0]">
            {{ looDetail[0].description }}
          </p>
        </div>
      </div>
      <div class="looaminity-facilities-holder">
        <h5 class="pb-2">{{ constants.FACILITIES_PROVIDED }}</h5>
        <div class="looaminity-facilities">
          <div v-for="item in data" class="looaminity-facilities-item">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="looaminity-image-holder">
      <div class="looaminity-image-upper"></div>
      <div class="looaminity-image-middle"></div>
      <div class="looaminity-image-lower"></div>
      <img src="../assets/mall-image.png" class="looaminity-image" />
    </div>
    <div class="looaminity-cleaning-info pb-3">
      <h5 class="pt-3">{{ constants.CLEANING_INFO }}</h5>
      <p class="py-2">{{ looDetail[0].cleaningInfo }}</p>
      <p class="pb-3">
        {{ constants.LAST_CLEANED }}
        <span class="looaminity-live-update">
          @ {{ looDetail[0].last_cleaned_time }} {{ constants.LIVE }} </span>
      </p>
    </div>
    <div class="looaminity-way py-5">
      <LooLargeButton :onClick="actionhandle">{{ constants.WAY }}</LooLargeButton>
    </div>
  </div>
</template>

<script lang="ts" src="@/controllers/LooAminity.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/components/looaminity.scss";
  @import "../styles/components/loomapway.scss";
</style>