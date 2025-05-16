/**
 * Un array de objetos que representa estancias en varias ciudades de Finlandia.
 * Cada objeto contiene detalles sobre una estancia específica, incluyendo:
 * 
 * @constant {Array<Object>} stays
 * @property {string} city - La ciudad donde se encuentra la estancia.
 * @property {string} country - El país donde se encuentra la estancia (siempre "Finlandia").
 * @property {boolean} superHost - Indica si el anfitrión es un superanfitrión.
 * @property {Object} title - Títulos en diferentes idiomas {en: string, es: string}
 * @property {number} rating - La calificación de la estancia (sobre 5).
 * @property {number} maxGuests - El número máximo de huéspedes permitidos.
 * @property {Object} type - Tipo de alojamiento en diferentes idiomas {en: string, es: string}
 * @property {number|null} beds - El número de camas disponibles (puede ser null si no se especifica).
 * @property {string} photo - Una URL a una foto del alojamiento.
 */
export const stays = [
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": {
            "en": "Stylist apartment in center of the city",
            "es": "Apartamento con estilo en el centro de la ciudad"
        },
        "rating": 4.4,
        "maxGuests": 3,
        "type": {
            "en": "Entire apartment",
            "es": "Apartamento completo"
        },
        "beds": 2,
        "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": false,
        "title": {
            "en": "Nice apartment in center of Helsinki",
            "es": "Bonito apartamento en el centro de Helsinki"
        },
        "rating": 4.2,
        "maxGuests": 5,
        "type": {
            "en": "Entire apartment",
            "es": "Apartamento completo"
        },
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": true,
        "title": {
            "en": "Arty interior in 1900 wooden house",
            "es": "Interior artístico en casa de madera de 1900"
        },
        "rating": 4.5,
        "maxGuests": 10,
        "type": {
            "en": "Entire house",
            "es": "Casa completa"
        },
        "beds": 6,
        "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": {
            "en": "Apartment next to market square",
            "es": "Apartamento junto a la plaza del mercado"
        },
        "rating": 4.48,
        "maxGuests": 3,
        "type": {
            "en": "Entire apartment",
            "es": "Apartamento completo"
        },
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": true,
        "title": {
            "en": "Villa Aurora guest-house",
            "es": "Casa de huéspedes Villa Aurora"
        },
        "rating": 4.75,
        "maxGuests": 9,
        "type": {
            "en": "Entire house",
            "es": "Casa completa"
        },
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": true,
        "title": {
            "en": "A cosy family house",
            "es": "Una acogedora casa familiar"
        },
        "rating": 4.95,
        "maxGuests": 6,
        "type": {
            "en": "Entire house",
            "es": "Casa completa"
        },
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": false,
        "title": {
            "en": "Lovely Studio near Railway Station",
            "es": "Encantador estudio cerca de la estación de tren"
        },
        "rating": 4.68,
        "maxGuests": 2,
        "type": {
            "en": "Private room",
            "es": "Habitación privada"
        },
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"
    },
    {
        "city": "Oulu",
        "country": "Finland",
        "superHost": false,
        "title": {
            "en": "Peaceful little home in city center",
            "es": "Pequeño hogar tranquilo en el centro de la ciudad"
        },
        "rating": 4.12,
        "maxGuests": 6,
        "type": {
            "en": "Entire house",
            "es": "Casa completa"
        },
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Oulu",
        "country": "Finland",
        "superHost": false,
        "title": {
            "en": "Beautiful new studio apartment nearby the center",
            "es": "Hermoso estudio nuevo cerca del centro"
        },
        "rating": 4.49,
        "maxGuests": 2,
        "type": {
            "en": "Entire apartment",
            "es": "Apartamento completo"
        },
        "beds": 1,
        "photo": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
    },
    {
        "city": "Oulu",
        "country": "Finland",
        "superHost": true,
        "title": {
            "en": "Cozy woodhouse flat with wooden sauna",
            "es": "Acogedor apartamento con sauna de madera"
        },
        "rating": 4.38,
        "maxGuests": 4,
        "type": {
            "en": "Entire house",
            "es": "Casa completa"
        },
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": false,
        "title": {
            "en": "Brand new studio apartment near the harbour",
            "es": "Estudio nuevo cerca del puerto"
        },
        "rating": 4.89,
        "maxGuests": 6,
        "type": {
            "en": "Entire apartment",
            "es": "Apartamento completo"
        },
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": {
            "en": "Beautiful and comfortable old wooden house",
            "es": "Hermosa y cómoda casa antigua de madera"
        },
        "rating": 4.63,
        "maxGuests": 10,
        "type": {
            "en": "Entire house",
            "es": "Casa completa"
        },
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": false,
        "title": {
            "en": "Turku Nordic Home near city center",
            "es": "Hogar nórdico en Turku cerca del centro"
        },
        "rating": 4.24,
        "maxGuests": 5,
        "type": {
            "en": "Entire apartment",
            "es": "Apartamento completo"
        },
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": true,
        "title": {
            "en": "Nice 2 room apartment close to everything",
            "es": "Bonito apartamento de 2 habitaciones cerca de todo"
        },
        "rating": 4.34,
        "maxGuests": 6,
        "type": {
            "en": "Entire apartment",
            "es": "Apartamento completo"
        },
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
    }
];