import { EHttpMethod, EResponseStatus } from "@domain";
import axios from "axios";
import { EActionTypes } from "../store/store.enum";
import mockData from "./api.mock.json";

export function request<T extends { [K: string]: any }>(
  method: EHttpMethod,
  path: string
) {
  return async (data: T | null | any = null) => {
    try {
      // mock response
      if (mockData.rates) {
        return mockData.rates;
      }
      // mock response end
      if (method === EHttpMethod.get) {
        let params;
        if (data) {
          params = Object.keys(data).reduce((acc: string, el: any) => {
            let value;
            if (typeof data[el] === "string" || typeof data[el] === "number") {
              value = data[el].toString();
            } else if (Array.isArray(data[el])) {
              value = data[el].join(",");
            } else {
              console.error("pls check URL params in request", path);
            }
            return `${acc}${el}=${value}&`;
          }, "");
          params = params.slice(0, -1);
        } else {
          params = "";
        }

        return await axios[method](`${path}?${params}`).then((e: any) => {
          if (
            (e.data?.response?.status &&
              e.data.response.status === EResponseStatus.failure) ||
            (e.data?.status && e.data.status === EResponseStatus.failure)
          ) {
            throw new Error(e);
          } else {
            return e.data;
          }
        });
      }
      // TODO prepare post data
      return axios[method](path, data, {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }).then((e: any) => {
        if (
          (e.data?.response?.status &&
            e.data.response.status === EResponseStatus.failure) ||
          (e.data?.status && e.data.status === EResponseStatus.failure)
        ) {
          throw new Error(e);
        } else {
          return e.data;
        }
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw new Error(err);
    }
  };
}

export const Requests: { [k: string]: ReturnType<typeof request> } = {
  [EActionTypes.fetchRates]: request(
    EHttpMethod.get,
    "https://api.ratesapi.io/api/latest"
  ),
};
