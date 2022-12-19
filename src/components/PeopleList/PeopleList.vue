<style scoped src="./PeopleList.scss" lang="scss"></style>
<template src="./PeopleList.html"></template>

<script lang="ts">
import { PersonModel } from "@/core/models";
import { Options, Vue } from "vue-class-component";
import { peopleService } from "@/core/services/PeopleService";
import PeopleCard from "../PeopleCard/PeopleCard.vue";
import CustomButton from "../CustomButton/CustomButton.vue";

@Options({
  components: {
    PeopleCard,
    CustomButton,
  },
})
export default class PeopleList extends Vue {
  people: PersonModel[] = [];

  isLoading = false;
  page: number | null = 1;
  canGoNext = false;
  canGoPrevious = false;

  override created(): void {
    this.load(this.page);
  }

  loadNext() {
    if (this.page && this.canGoNext) {
      this.load(++this.page);
    }
  }

  loadPrevious() {
    if (this.page && this.canGoPrevious) {
      this.load(--this.page);
    }
  }

  load(page: number | null) {
    if (!page) return;
    this.isLoading = true;

    peopleService
      .getAll({ page })
      .then(({ next, previous, results }) => {
        this.people = results.map((person) => PersonModel.fromJson(person));
        this.canGoNext = !!next;
        this.canGoPrevious = !!previous;
      })
      .finally(() => (this.isLoading = false));
  }
}
</script>
