import Airtable from 'airtable';
import { environment } from '../../environments/environment';

export const base = new Airtable({ apiKey: environment.airtableToken }).base(environment.airtableKeyApi);



