import { base } from "./base";

export function createLike(userId: string, projectId: string) {
    base('Likes').create([
        {
          "fields": {
            "Utilisateur": [userId],
            "Projet": [projectId]
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records?.forEach(function (record) {
          console.log(record.getId());
        });
      });
}