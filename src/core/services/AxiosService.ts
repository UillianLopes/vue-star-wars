import axios from "axios";
import { AxiosResponse } from "axios";

export class AxiosService {
  get<T>(url: string): Promise<AxiosResponse<T, any>> {
    return axios.get<T>(url);
  }
}

export const axiosService = new AxiosService();
