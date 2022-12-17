<style scoped src="./PeopleList.scss" lang="scss"></style>
<template src="./PeopleList.html"></template>

<script lang="ts">
import { Person } from "@/core/person.model";
import { Options, Vue } from "vue-class-component";
import PeopleCard from "../PeopleCard/PeopleCard.vue";
import { ListResponseModel } from "@/core/response.model";
import { axiosService } from "@/core/services/AxiosService";

@Options({
  components: {
    PeopleCard,
  },
})
export default class PeopleList extends Vue {
  people: Person[] = [];

  isLoading = false;
  next: string | null = "https://swapi.dev/api/people/";
  previous: string | null = null;
  axiosService = axiosService;

  override created(): void {
    this.loadNext();
  }

  loadNext() {
    this.load(this.next);
  }

  loadPrevious() {
    this.load(this.previous);
  }

  load(url: string | null) {
    if (!url) return;
    this.isLoading = true;
    axiosService
      .get<ListResponseModel<Partial<Person>>>(url)
      .then((response) => {
        const { next, previous, results } = response.data;
        this.people = results.map((person) => Person.fromJson(person));
        this.next = next;
        this.previous = previous;
      })
      .finally(() => (this.isLoading = false));
  }
}
</script>
