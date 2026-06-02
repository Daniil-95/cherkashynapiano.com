import axios from "axios";
import type {
  Biography,
  Repertoire,
  Concert,
  Photo,
  Video,
} from "./types";

const API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Biography
export const getBiography = async (): Promise<Biography | null> => {
  try {
    const response = await apiClient.get("/biography");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching biography:", error);
    return null;
  }
};

// Repertoire
export const getRepertoire = async (): Promise<Repertoire[]> => {
  try {
    const response = await apiClient.get(
      "/repertoires?sort=createdAt:desc&pagination[limit]=100"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching repertoire:", error);
    return [];
  }
};

// Concerts
export const getConcerts = async (
  upcoming: boolean = true
): Promise<Concert[]> => {
  try {
    const filters = upcoming
      ? "filters[isUpcoming][$eq]=true"
      : "filters[isUpcoming][$eq]=false";
    const response = await apiClient.get(
      `/concerts?${filters}&sort=date:asc&pagination[limit]=50`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching concerts:", error);
    return [];
  }
};

// Photos
export const getPhotos = async (): Promise<Photo[]> => {
  try {
    const response = await apiClient.get(
      "/photos?sort=order:asc&pagination[limit]=100"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};

// Videos
export const getVideos = async (): Promise<Video[]> => {
  try {
    const response = await apiClient.get(
      "/videos?sort=order:asc&pagination[limit]=50"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};

// Contact Message
export const sendContactMessage = async (data: {
  name: string;
  email: string;
  message: string;
}): Promise<boolean> => {
  try {
    await apiClient.post("/contact-messages", { data });
    return true;
  } catch (error) {
    console.error("Error sending contact message:", error);
    return false;
  }
};
