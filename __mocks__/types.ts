export interface AccommodationType {
  name: string;
  address: string;
  rating: number;
  images: string[];
  combinations?: {
    single?: number;
    twin?: number;
    price: number;
    currency: string;
  }[];
}
