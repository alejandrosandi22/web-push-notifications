# Web Push Notifications

### Request a push notification
 
```bash
 await fetch('https://wpn.alejandrosandi.com/push', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     title: 'Hello World',
     body: 'This is a push notification',
     icon: 'https://wpn.alejandrosandi.com/favicon.ico',
   }),
 });
```