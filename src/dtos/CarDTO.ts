export type Rent = {
  period: string;
  price: number;
}

export type Accessories = {
  id: string;
  type: string;
  name: string;
}

export type PhotoProps = {
  id: string;
  photo: string;
};

export type CarDTO = {
  id: string;
  brand: string;
  name: string;
  about: string;
  period: string;
  price: number;
  fuel_type: string;
  thumbnail: string;
  accessories: Accessories[];
  photos: PhotoProps[];
}

export type CarsListData = {
  data: CarDTO[]
}