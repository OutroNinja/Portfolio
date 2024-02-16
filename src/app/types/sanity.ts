import { PortableTextBlock } from "sanity"

export interface Projects {
    image: string
    technologies: Technology[]
    name: string,
    slug: string
    github: string,
    url: string,
    content: PortableTextBlock[]
    _id: string
    _createdAt: Date
}

export interface Technology {
    name: string,
    image: string,
}

export interface Child {
    _type: string,
    marks: unknown[]
    text: string
    _key: string
}