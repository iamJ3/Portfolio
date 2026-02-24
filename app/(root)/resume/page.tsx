"use client";
import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    const url =
      process.env.NEXT_PUBLIC_RESUME_LINK ||
      "https://drive.google.com/file/d/1FnV0YxaDdJX_uiI3LL8P-0tAl2EDEyOE/view?usp=sharing";
    // Use a client-safe redirect for external URLs
    if (typeof window !== "undefined") {
      window.location.assign(url);
    }
  }, []);

  return <div>Redirecting to the resume...</div>;
}
