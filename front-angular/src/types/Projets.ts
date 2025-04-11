import { FieldSet } from "airtable"

export type Projets = FieldSet & {
    Titre : String,
    NombreLikes : String
    Description : String,
    Publication : String,
    Technologies : String,
    Visuels : String,
    Videos : String,
    Soustitre: String,
}