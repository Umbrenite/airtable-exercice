import { FieldSet } from "airtable"

export type Projets = FieldSet & {
    ID : string,
    Titre : string,
    NombreLikes : string,
    Description : string,
    Publication : string,
    NomTechno : string[],
    Visuels : string,
    Videos : string,
    Soustitre: string,
    recordId : string,
}