import * as firebase from 'firebase/app';
require('firebase/messaging');

const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzuKcoSNAfy6Mj6MFLYiSTdKgayetSmQU",
    authDomain: "iqsurvey-bafd8.firebaseapp.com",
    databaseURL: "https://iqsurvey-bafd8.firebaseio.com",
    projectId: "iqsurvey-bafd8",
    storageBucket: "iqsurvey-bafd8.appspot.com",
    messagingSenderId: "897489212181",
    appId: "1:897489212181:web:8b93759f367f869fd38f1c",
    measurementId: "G-DDG86SFEGK"
});
let messaging = null;

if (firebase.messaging.isSupported()) {
    messaging = initializedFirebaseApp.messaging();

    messaging.usePublicVapidKey(
        'AAAA0PaGkxU:APA91bFjr7cMU6W8aPLn2chC6KrP-SvCgE_Yc7NiRdxcmacUDrEFYeMFeNlqkf11WUgjwy6aRs4h1_rqCJubr_F3f8AH2KsRFixHnWkMY6f3wDPnxksz1_oypV_wLueT-v7NtnF1uhPI'
    );

    messaging.onMessage((payload) => {
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: '/android-chrome-144x144.png',
        };

        if (!('Notification' in window)) {
            console.log('This browser does not support system notifications');
        } else if (Notification.permission === 'granted') {
            let notification = new Notification(notificationTitle,notificationOptions);
            notification.onclick = function(event) {
                event.preventDefault();
                window.open(payload.notification.click_action , '_blank');
                notification.close();
            };
        }
    });
}

export { messaging };
