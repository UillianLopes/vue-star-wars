import axios from "axios";
import { PersonModel } from "../models/PersonModel";
import { ListResponseModel } from "@/core/models";

export class PeopleService {
  private readonly _client = axios.create({
    baseURL: "https://swapi.dev/api/people/",
  });

  getAll(params: {
    page: number;
  }): Promise<ListResponseModel<Partial<PersonModel>>> {
    return this._client
      .get<ListResponseModel<Partial<PersonModel>>>("", { params })
      .then((response) => response.data);
  }

  get(id: number): Promise<Partial<PersonModel>> {
    return this._client
      .get<Partial<PersonModel>>(`${id}`)
      .then((response) => response.data);
  }
}

export const peopleService = new PeopleService();
