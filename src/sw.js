/* eslint-disable no-undef */


import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);
self.__precacheManifest = [].concat(self.__precacheManifest || []);


workbox.setConfig({
    debug: false
});



/* self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
}); */
