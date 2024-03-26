"use client"

import { config } from "@/utils/config";
import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "../../../../sanity/schemas";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

export default function AdminPage() {
    return (
        <NextStudio config={defineConfig({
            projectId: config.projectId,
            dataset: config.dataset,
            title: "My Portfolio",
            basePath: "/admin",
            plugins: [structureTool(), vercelDeployTool()],
            schema: { types: schemas }
        })} />
    )
}