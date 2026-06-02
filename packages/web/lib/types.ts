export interface Biography {
  id: string;
  title: string;
  description: string;
  profileImage?: string;
}

export interface Repertoire {
  id: string;
  title: string;
  composer: string;
  year?: number;
  duration?: number;
  description?: string;
}

export interface Concert {
  id: string;
  title: string;
  description?: string;
  date: string;
  location: string;
  venue: string;
  time?: string;
  isUpcoming: boolean;
}

export interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
  order: number;
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  youtubeId: string;
  category?: string;
  order: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}
