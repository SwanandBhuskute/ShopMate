export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface Product {
  id: number | string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus?: string;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  reviews: Review[];
  images: string[];
  thumbnail: string;
}
