"use client";
import { useState } from "react";
export function PostForm() {
    const [postText, setPostText] = useState("");
    const [loading, setLoading] = useState(false);

    async function onSubmit(e) {
        e.prevendDefault();
        setLoading(true);
        try {
            // your code here
            const req_obj = 
        }
    }
}