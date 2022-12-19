<style scoped src="./PeopleCard.scss" lang="scss"></style>
<template src="./PeopleCard.html"></template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PersonModel } from "@/core/models/PersonModel";
import CustomButton from "../CustomButton/CustomButton.vue";
@Options({
  props: {
    person: PersonModel,
  },
  components: {
    CustomButton,
  },
})
export default class PeopleCard extends Vue {
  person!: PersonModel;
}
</script>
