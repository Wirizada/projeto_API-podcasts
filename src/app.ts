import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcast-controller";
import { Routes } from "./routes/routes";
import { httpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  // Query string
  // http://localhost:3333/api/episode?p=flow
  const baseUrl = request.url?.split("?")[0];

  // Listar podcast
  if (request.method === httpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === httpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
  }
};


