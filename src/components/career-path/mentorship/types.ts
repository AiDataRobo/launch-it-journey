
export interface Mentor {
  id: number;
  name: string;
  role: string;
  company: string;
  expertise: string[];
  yearsExperience: number;
  rating: number;
  reviews: number;
  imgSrc: string;
}

export interface CommunityTopic {
  title: string;
  replies: number;
  views: number;
}
