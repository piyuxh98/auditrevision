import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import topics from "@/data/topics.json";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Topic = (typeof topics)[number];
