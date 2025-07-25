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
        'http://localhost:5174',         // Vite dev server
        'https://lazarsalon.com',
        'https://lazarsalon.hu',
      ],
      methods: ['GET','POST','PUT','DELETE','PATCH','OPTIONS'],
    },
  },
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::public',
    config: { maxAge: 60000 },
  },
];
