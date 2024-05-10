import { IncomingMessage, ServerResponse, get } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services";
import { seviceFilterEpisodes } from "../services/filter-episodes-services";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const DEFAULT_CONTENT = { "content-type": ContentType.JSON };

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await seviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));

  res.end();
};
