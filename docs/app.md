# Podcast Menager

### Descrição
Um app ao estilo netflix, aonde eu possa centralizar diferentes episódios de podcasts separados por categoria

### Dominio
Podcasts feitos em vídeo

### Features
- Listar os episódios de podcasts em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast
## Como

### Features

- Listar os episódios podcasts em sessões de categoria

### Com vou implementar:
    
    Vou retornar em uma api rest (json) nome do podcast, nome do episódio, imagem de capa, link, categoria

    GET: retorna lista de episodios

    Response:

```js
    
   
    [
    {
        podcastName: "Flow",
        episode: "CBUM - Flow #319",
        videoId:"pQSuQmUfS30/",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde", "esporte", "bodybuilder"]    
    },
    {
        podcastName: "Flow",
        episode: "RUBENS BARRICHELLO - Flow #339",
        videoId: "4KDGTdiOV4I",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        category: ["esporte", "corrida"]    
    },
    ]
    
```