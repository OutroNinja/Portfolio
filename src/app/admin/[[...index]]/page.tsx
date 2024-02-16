"use client"

import { config } from "@/utils/config";
import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "../../../../sanity/schemas";

export default function AdminPage() {
    return (
        <NextStudio config={defineConfig({
            projectId: config.projectId,
            dataset: config.dataset,
            title: "My Portfolio",
            basePath: "/admin",
            plugins: [structureTool()],
            schema: { types: schemas }
        })} />
    )
}