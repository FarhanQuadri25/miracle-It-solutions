import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

type VisitorResponse = { count: number };

async function incrementVisitorCount(): Promise<VisitorResponse> {
  return await api.post("visitors/increment").json();
}

const SESSION_FLAG = "visitor_counted";

export function useVisitorCount() {
  const { mutate: increment } = useMutation({
    mutationFn: incrementVisitorCount,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_FLAG)) return;

    increment();
    sessionStorage.setItem(SESSION_FLAG, "true");
  }, [increment]);
}
