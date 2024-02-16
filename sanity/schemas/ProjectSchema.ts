const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                }
            ]
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name" }
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ 
                type: "object",
                fields: [
                    { name: "name", type: "string", title: "Name" },
                    { name: "image", type: "image", title: "Image", options: { hotspot: true } }
                ]
            }]
        },
        {
            name: "url",
            title: "Url",
            type: "url"
        },
        {
            name: "github",
            title: "Github",
            type: "url"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }]
        }
    ]
}

export default project;
