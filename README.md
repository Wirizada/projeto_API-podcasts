# Podcast Manager

## Descrição
O Podcast Manager é um aplicativo inspirado no estilo da Netflix, projetado para centralizar diferentes episódios de podcasts, categorizando-os para facilitar a navegação e a descoberta de novos conteúdos. Este aplicativo se concentra em podcasts produzidos em formato de vídeo.

## Funcionalidades
- **Listagem de Episódios**: Os episódios de podcasts são apresentados em sessões categorizadas.
- **Filtragem por Nome de Podcast**: Os usuários podem filtrar os episódios por nome do podcast.


## Como será Implementado

### API REST
O Podcast Manager fornecerá uma API REST que retornará detalhes dos episódios em formato JSON, incluindo o nome do podcast, o título do episódio, a imagem de capa, o link para o vídeo e a categoria do episódio.

### Exemplo de Requisição

```http
GET /episodes
```

### Exemplo de Resposta

```json
[
    {
        "podcastName": "Flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30/",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "category": ["saúde", "esporte", "bodybuilder"]    
    },
    {
        "podcastName": "Flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        "category": ["esporte", "corrida"]    
    }
]
```

### Trecho de Código

```typescript
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
  const baseUrl = request.url?.split("?")[0];

  // Listar podcast
  if (request.method === httpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  // Filtrar podcast
  if (request.method === httpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
  }
};
```

Este trecho de código demonstra a lógica principal do servidor, que trata as requisições HTTP para listar todos os episódios de podcast e filtrá-los por nome de podcast.
