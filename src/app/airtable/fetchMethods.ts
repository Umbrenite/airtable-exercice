import { FieldSet, Records } from 'airtable';
import { base } from "./base";

export function fetchAll(tableName : string, receiver: any) {
    base.table(tableName).select({
    }).eachPage(
      (records: Records<FieldSet>, fetchNextPage: () => void) => {
        records.forEach((record) => {
          receiver.push({...record.fields, recordId: record.id});
        });        
    
        fetchNextPage();
      },
      function done(err: Error | null) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
}

export function findSpecificCard(tableName: string, identifier: string): Promise<any> {
  return new Promise((resolve, reject) => {
    base(tableName).find(identifier, function(err, record) {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      resolve(record?.fields);
    });
  });
}

export function findSpecificData(tableName: string, identifiers: any): Promise<any> {
  return new Promise((resolve, reject) => {

    const formula = `AND(${Object.keys(identifiers)
      .map(key => {
        const value = identifiers[key];
        return `{${key}}='${typeof value === 'string' ? value.replace(/'/g, "''") : value}'`;
      })
      .join(', ')})`;

    base.table(tableName).select({
      filterByFormula: formula
    }).firstPage(function(err, records) {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      if (records?.length === 0) {
        reject(new Error('Aucun enregistrement trouvé.'));
        return;
      } else if (records != undefined) {
        const result = {...records[0].fields, recordId: records[0].id};
        resolve(result); // Retourne le premier enregistrement trouvé
      }
    });
  });
}
