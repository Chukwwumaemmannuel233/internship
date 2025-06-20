export interface Item {
  id: number;
  name: string;
  type: string;
  description: string;
  cover: string;     // URL (from URL.createObjectURL or db)
  images: string[];  // extra image URLs
}
