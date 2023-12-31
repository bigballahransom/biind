export type User = {
    id: string;
    username: string;
    image?: string;
    name: string;
}
export type TweetType = {
    content: string;
    id: string;
    createdAt: string;
    user: User;
    image?: string;
    numberOfComments?: number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
    impressions?: number,
}