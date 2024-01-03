type PhotoLinks = {
    thumb: string,
    small: string
}

type UserPhoto = {
    name: string
}

export type Photo = {
    id: string
    description: string
    urls: PhotoLinks
    user: UserPhoto
};
