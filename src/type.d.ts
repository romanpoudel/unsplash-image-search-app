export type Photo = {
  id: number;
  description: string;
  alt_description: string;
  width: number;
  height: number;
  urls: {
    large: string;
    regular: string;
    raw: string;
    small: string;
    thumb: string;
  };
  color: string | null;
  likes: number;
  user: {
    username: string;
    name: string;
    total_photos: number;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    links: {
      self: string;
      html: string;
    };
  };
};
