import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "image": image.asset->url,
    "slug": slug.current,
    github,
    url,
    content,
    technologies[]{
        name,
        "image": image.asset->url
    },
}`
