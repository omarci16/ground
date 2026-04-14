export interface Barber {
  id: string;
  name: string;
  bio: string;
  specialty: string;
  photo_url: string;
  instagram_url: string | null;
}

export interface Service {
  id: string;
  name: string;
  duration_minutes: number;
  price_huf: number;
  barber_ids: string[];
}

export interface Booking {
  id: string;
  barber_id: string;
  service_id: string;
  client_name: string;
  client_phone: string;
  datetime: string; // ISO 8601
  status: "pending" | "confirmed" | "cancelled" | "completed";
}

export interface Testimonial {
  id: string;
  client_name: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  created_at: string; // ISO 8601
}
