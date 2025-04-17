// ~/strapi-backend/server.js
'use strict';

// Betölti a .env fájlodat, ha használsz ilyet
require('dotenv').config();

// Indítja a Strapi-t programból
const strapi = require('@strapi/strapi');
strapi().start();
