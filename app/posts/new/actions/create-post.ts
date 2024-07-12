"use server"; // don't forget to add this!

import axios from "axios";
import { z } from "zod";
import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient();

// This schema is used to validate input from client.
const schema = z.object({
    title: z.string(),
    content: z.string(),
});

const apiUrl = "http://localhost:5000/";

export const createNoImagePost = actionClient
    .schema(schema)
    .action(async ({ parsedInput: { title, content } }) => {
        axios.post(`${apiUrl}/posts/no-image-post`, {
            title: title,
            content: content,
        });
    });
