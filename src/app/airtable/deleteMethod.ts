import { base } from "./base";

export function deleteLike(likeId: string) {
    base('Likes').destroy([likeId], function(err, deletedRecords) {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Deleted', deletedRecords?.length, 'records');
      });
}