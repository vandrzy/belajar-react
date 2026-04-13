type Artist = {
    id: number,
    name: string,
    pixiv: string | null,
    twitter: string | null
}

type Tag = {
    id: number,
    name: string,
    slug: string    
}

type ImageItem = {
    id: number,
    url: string,
    artists: Artist[],
    tags: Tag[]
}

export type Anime = {
    items: ImageItem[],
    pageNumber: number,
    totalPage: number,
    hasNextPage: boolean
}