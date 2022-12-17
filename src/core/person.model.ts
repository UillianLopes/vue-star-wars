import { Functions } from "./functions/functions";

export class Person {
  name: string | null = null;
  height: string | null = null;
  mass: string | null = null;
  hair_color: string | null = null;
  skin_color: string | null = null;
  eye_color: string | null = null;
  birth_year: string | null = null;
  gender: string | null = null;
  homeworld: string | null = null;
  films: string[] | null = null;
  species: string[] | null = null;
  vehicles: string[] | null = null;
  starships: string[] | null = null;
  created: Date | null = null;
  edited: Date | null = null;
  url: string | null = null;
  id: string | null = null;

  constructor(data: Partial<Person>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  static fromJson(json: any): Person {
    json["id"] = Functions.extractIdFromUrl(json.url);
    return new Person(json);
  }
}
