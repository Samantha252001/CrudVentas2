import { Related } from "../related/related";

export interface Product{
    id: number,
    name: string,
    description: string,
    brand: string,
    model: string,
    image: string,
    created: Date,
    update: Date,
    enable: boolean,
    personId: number,
    relateds: Related []
}