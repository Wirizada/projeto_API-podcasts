import { podcastModel } from "./podcast-model";

export interface PodcastTransferModel {
  statusCode: number;
  body: podcastModel[];
}
