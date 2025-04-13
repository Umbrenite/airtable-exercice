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

export function findSpecific(tableName: string, identifier: string): Promise<any> {
  return new Promise((resolve, reject) => {
    base(tableName).find(identifier, function(err, record) {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      console.log('Retrieved', record?.id);
      resolve(record?.fields);
    });
  });
}
