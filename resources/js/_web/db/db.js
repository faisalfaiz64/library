import Dexie from 'dexie';
import { Survey } from './models/survey';

export const db = new Dexie('IbrahimQurashiDB');
db.version(1).stores({
    survey: '++id, fullname, phone, gender, product, feedback, survey, branch, timestsamp',
    branch: '++id, branch_id, timestsamp',
    products: '++id, product_id, name, code, image, survey_id',

});
db.open();

db.survey.mapToClass(Survey);