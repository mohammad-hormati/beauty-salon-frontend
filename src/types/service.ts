type Performer = {
  id: number;
  name: string;
  createdAt: string;
};

export type Service = {
  id: number;
  name: string;
  durationMin: number;
  price: number;
  performerId: number;
  performer: Performer;
};
