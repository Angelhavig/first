export interface PostsResult {
    data: Post[];
    meta: Meta;
}

export interface Meta{
    page: number;
}
export interface Post {
    userId:number;
    id:number;
    title:string;
    name:string;
}
