<template>
  <div class="container">
    <LandingIntroduction/>
    <VibleMent/>
    <WhoAmI/>
    <PhotoGallery/>
    <PersonContact/>
    <WeddingLocation/>
    <CircleDivider/>
    <SendAccount/>
    <DdayFooter/>
    <br/><br/>
  </div>
</template>

<script>
import LandingIntroduction from "../components/LandingIntroduction.vue";
import VibleMent from "../components/VibleMent.vue";
import WeddingLocation from "../components/WeddingLocation.vue";
import CircleDivider from "../components/CircleDivider.vue";
import PersonContact from "../components/PersonContact.vue";
import SendAccount from "~/components/SendAccount.vue";
import WhoAmI from "~/components/WhoAmI.vue";
import PhotoGallery from "~/components/PhotoGallery.vue";
import DdayFooter from "~/components/DdayFooter.vue";

export default {
  name: "index",
  head() {
    return {
      title: '테스트',
    }
  },
  components: {
    DdayFooter,
    PhotoGallery,
    WhoAmI, SendAccount, PersonContact, CircleDivider, WeddingLocation, VibleMent, LandingIntroduction},
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  background-color: white;
}
</style>
