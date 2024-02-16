import { createClient, type SanityClient } from "next-sanity"; 
import { config } from "@/utils/config";

export const client: SanityClient = createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    apiVersion: config.apiVersion,
    useCdn: true,
});