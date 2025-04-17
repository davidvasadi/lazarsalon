// backend/config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: { /* … */ },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:5173',         // Vite dev server
        'https://lazarsalon.com',
        'https://lazarsalon.hu',
      ],
      methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  {
    name: 'strapi::public',
    config: { maxAge: 60000 },
  },
];
