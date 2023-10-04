self.addEventListener('install', (event) => {
    console.info('[Service Worker] Installing Service Worker...', event);
});

self.addEventListener('activate', (event) => {
    console.info('[Service Worker] Activating Service Worker...', event);
    return self.clients.claim();
});

self.addEventListener('message', (event) => {
    console.info('Scheduling Notification', event);
    if (event.data.action === 'scheduleNotification') {
        const delay = event.data.delay;
        const title = event.data.title;
        const options = {
            body: event.data.body,
        };
        console.info('Successfully scheduled', delay, title, options);
        setTimeout(() => {
            self.registration.showNotification(title, options);
        }, delay);
    }
});
