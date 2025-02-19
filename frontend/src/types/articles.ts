export interface Article {
    title: string,
    topic: string,
    description: string,
    image?: string | null,
    publisher?: string | null,
    createdAt?: Date | null,
    updatedAt?: Date | null,
}