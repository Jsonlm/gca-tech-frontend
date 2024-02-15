export class Salesman {
    id!: string;
    name!: string;
    category!: string;
    address!: string;
    isActive!: boolean;
    coordinates!: Coordinates;
    photo!: string;
    vehicle!: string;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
    height: string;
}
