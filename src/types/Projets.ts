import { FieldSet } from "airtable"

export type Projets = FieldSet & {
    ID : string,
    Titre : string,
    NombreLikes : number,
    Description : string,
    Publication : boolean,
    NomTechno : string[],
    URLVisuel : string,
    URLVideo : string,
    Soustitre: string,
    recordId : string,
    UtilisateurSurProjet: string,
    NomUtilisateur: string[],
    PrenomUtilisateur: string[],
}