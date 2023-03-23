import {
    initializeApp,
    cert,
} from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
const options = {
    storageBucket: `gs://${process.env.NEXT_PUBLIC_BUCKET_NAME}.appspot.com`,
    credential: cert(process.env.NEXT_PUBLIC_SERVICE_ACCOUNT_PATH as string)
};
initializeApp(options);
const db = getFirestore();
const bucket = getStorage().bucket();
module.exports = { db, bucket };