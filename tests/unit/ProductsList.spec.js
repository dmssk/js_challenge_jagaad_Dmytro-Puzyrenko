/* eslint-disable */
import {shallowMount, createLocalVue} from '@vue/test-utils'
import AppProductsList from '@/components/AppProductsList.vue'
import Vuex from 'vuex'

jest.mock('@/services/products')
import product from '@/services/products'

product.get.mockImplementation(() => Promise.resolve(
  [
    {
      "max_confirmation_time": "P0D",
      "cutoff_time": "P0D",
      "booking_type": "CALENDAR-TIMESLOTS",
      "uuid": "8cf63a09-d148-4cfe-a427-ccd538b35185",
      "city": {
        "id": 2,
        "name": "Roma",
        "country": {"id": 82, "name": "Italia", "iso_code": "IT"},
        "cover_image_url": "https://images.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
        "url": "https://www.musement.com/it/roma/",
        "time_zone": "Europe/Rome"
      },
      "saves": 0,
      "title": "Biglietti salta fila per i Musei Vaticani con ingresso opzionale per la Basilica di San Pietro",
      "relevance": 3000,
      "relevance_venue": 3000,
      "must_see": false,
      "last_chance": false,
      "top_seller": true,
      "voucher_access_usage": "MOBILE",
      "temporary": false,
      "description": "Prenota un ingresso prioritario esclusivo con assistenza, accedi ai Musei nel modo più rapido possibile e scegli tra audioguida e visita guidata!",
      "about": "Gli inestimabili capolavori dei Musei Vaticani costituiscono un tesoro imperdibile. Sono una delle attrazioni più famose e visitate al mondo: procurati i biglietti in anticipo per evitare le lunghe file all'ingresso!Incontra il tuo rappresentante Musement che ti accompagnerà all'interno dei Musei a un orario prestabilito attraverso un ingresso riservato. Grazie a questo accesso rapido ed esclusivo, avrai più tempo da dedicare alla tua visita.Ammira i celebri affreschi di Michelangelo, tra cui lo stupefacente Giudizio Universale, le spettacolari scale a chiocciola di Giuseppe Momo, il famoso affresco La liberazione di San Pietro di Raffaello e molti altri capolavori.Aggiungi l'audioguida alla tua esperienza se vuoi visitare i musei da solo senza perdere l'occasione di saperne di più su ciò che ammiri.",
      "meeting_point": "Presenta il tuo voucher al coordinatore Musement (vestito con l'uniforme arancione Musement) al punto d'incontro, in cima alla rampa di scale subito dopo il Caffè Vaticano.ATTENZIONE: se hai selezionato l'opzione audioguida, accederai alla Basilica di San Pietro autonomamente. Dopo la visita dei Musei Vaticani, esci dal museo e raggiungi l'ingresso principale della Basilica; lì, un cooridinatore Vox Mundi, con il logo sopra alla giacca blu, ti accompagnerà dentro alla basilica attraverso un ingresso dedicato",
      "operational_days": "Lunedì e sabato",
      "duration": "P0D",
      "validity": "P0D",
      "has_price_info_on_date": true,
      "open": false,
      "ticket_not_included": false,
      "likely_to_sell_out": false,
      "special_offer": false,
      "exclusive": false,
      "best_price": false,
      "daily": false,
      "languages": [{"code": "en", "name": "Inglese"}, {"code": "it", "name": "Italiano"}],
      "group_size": [],
      "food": [],
      "services": [],
      "features": [{"code": "musement-tour", "name": "features.musement-tour"}, {
        "code": "istant",
        "name": "CONFERMA ISTANTANEA"
      }, {"code": "skip", "name": "SALTA LA CODA"}],
      "highlights": ["Entra dall'ingresso riservato con un assistente Musement, salta le lunghe file e inizia subito la tua esperienza", "Accedi ai Musei nel modo più rapido possibile e ammira i capolavori della Cappella Sistina nel tempo libero", "Scegli l'audioguida opzionale per accedere alla Basilica di San Pietro e scoprire i musei in autonomia"],
      "included": ["Biglietti salta fila per i Musei Vaticani e la Cappella Sistina", "Ingresso prioritario con un rappresentante Musement", "Tempo illimitato da trascorrere nei Musei Vaticani", "Audioguida per i Musei Vaticani e la Basilica di San Pietro con ingresso alla Basilica (solo se selezionato)", "Auricolari (solo se selezionate)"],
      "not_included": ["Trasporto"],
      "is_available_today": false,
      "is_available_tomorrow": true,
      "cover_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
      "service_fee": {
        "currency": "EUR",
        "value": 0,
        "formatted_value": "€ 0.00",
        "formatted_iso_value": "0,00 €"
      },
      "retail_price": {
        "currency": "EUR",
        "value": 24,
        "formatted_value": "€ 24.00",
        "formatted_iso_value": "24,00 €"
      },
      "retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 24,
        "formatted_value": "€ 24.00",
        "formatted_iso_value": "24,00 €"
      },
      "original_retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 24,
        "formatted_value": "€ 24.00",
        "formatted_iso_value": "24,00 €"
      },
      "original_retail_price": {
        "currency": "EUR",
        "value": 24,
        "formatted_value": "€ 24.00",
        "formatted_iso_value": "24,00 €"
      },
      "discount": 0,
      "categories": [{
        "id": 209,
        "name": "Attrazioni e tour guidati",
        "level": "1",
        "code": "new-attractions-guided-tours",
        "event_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/attrazioni-e-tour-guidati-c/"
      }],
      "reviews_number": 246,
      "reviews_avg": 4.2,
      "reviews_aggregated_info": {"1": 0, "2": 3, "3": 13, "4": 158, "5": 72},
      "latitude": 41.907069,
      "longitude": 12.453361,
      "url": "https://www.musement.com/it/roma/biglietti-salta-fila-per-i-musei-vaticani-con-ingresso-opzionale-per-la-basilica-di-san-pietro-166063/",
      "flavours": [{
        "id": 2,
        "name": "Biglietti d'ingresso",
        "active": true,
        "slug": "biglietti-d-ingresso"
      }],
      "verticals": [{
        "id": 1,
        "name": "Arte e musei",
        "active": true,
        "code": "arts-culture",
        "slug": "arte-e-musei",
        "url": "https://www.musement.com/it/arte-e-musei-t/",
        "meta_title": "Scopri il meraviglioso mondo dell'arte e dei musei",
        "meta_description": "Scopri le opere d'arte più famose del mondo con Musement, ammira i meravigliosi dipinti rinascimentali e le sculture rivoluzionarie delle avanguardie artistiche.",
        "cover_image_url": "https://images.musement.com/vertical/0001/30/art-and-culture_header-29023.jpeg?w=540",
        "relevance": 100
      }, {
        "id": 2,
        "name": "Tour e attrazioni",
        "active": true,
        "code": "sightseeing",
        "slug": "tour-e-attrazioni",
        "url": "https://www.musement.com/it/tour-e-attrazioni-t/",
        "meta_title": "Scopri i migliori tour e le attrazioni più belle",
        "meta_description": "Esplora ogni città con Musement come se fossi uno del posto. Non aspettare in fila per visitare le attrazioni più famose del mondo e scopri i luoghi meno conosciuti.",
        "cover_image_url": "https://images.musement.com/vertical/0001/31/sightseeing-00-jpg_header-30549.jpeg?w=540",
        "relevance": 90
      }],
      "giftable": false,
      "has_passenger_info": false,
      "has_extra_customer_data": false,
      "buy_multiplier": 1,
      "ticket": false,
      "free_cancellation": true
    },
    {
      "max_confirmation_time": "P0D",
      "cutoff_time": "P0D",
      "booking_type": "CALENDAR-TIMESLOTS",
      "uuid": "b36ba13e-cd53-44dc-8741-b200ada5549a",
      "city": {
        "id": 2,
        "name": "Roma",
        "country": {"id": 82, "name": "Italia", "iso_code": "IT"},
        "cover_image_url": "https://images.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
        "url": "https://www.musement.com/it/roma/",
        "time_zone": "Europe/Rome"
      },
      "saves": 0,
      "title": "Biglietti salta fila per Musei Vaticani e Basilica di San Pietro con audioguida",
      "relevance": 2931,
      "relevance_venue": 2931,
      "must_see": false,
      "last_chance": false,
      "top_seller": false,
      "voucher_access_usage": "MOBILE",
      "temporary": false,
      "description": "Evita le lunghe code all'ingresso dei Musei Vaticani con i biglietti salta fila e scopri di più sui siti che visiterai grazie alla tua audioguida.",
      "about": "I Musei Vaticani sono uno dei complessi museali più grandi e visitati al mondo. Scopri le incredibili Stanze di Raffaello e gli splendidi affreschi di Michelangelo. Ammira la più famosa delle sue opere, la Creazione di Adamo, all'interno della Cappella Sistina, e altri inestimabili capolavori artistici come la Cappella di Niccoline, le Stanze di Raffaello e la Loggia e l'Appartamento Borgia.Entra nei Musei Vaticani e nella Basilica di San Pietro con l'ingresso veloce possibile e ricevi l'assistenza di un coordinatore. Con la tua audioguida visiterai entrambi i siti al tuo ritmo mentre scopri interessanti informazioni e la storia delle opere e dei luoghi che visiti.",
      "meeting_point": "Presenta il tuo voucher al coordinatore Musement (vestito con l'uniforme Musement) al punto d'incontro, in cima alla rampa di scale, subito dopo il Caffè Vaticano.Poi, accederai alla Basilica di San Pietro autonomamente. Dopo la visita dei Musei Vaticani, esci dal museo e raggiungi l'ingresso principale della Basilica; lì, un cooridinatore Vox Mundi, con il logo sopra alla giacca blu, ti accompagnerà dentro alla basilica attraverso un ingresso dedicato",
      "operational_days": "lunedì-sabato",
      "duration": "P0D",
      "duration_range": {"max": "P0D"},
      "validity": "P0D",
      "has_price_info_on_date": true,
      "open": false,
      "ticket_not_included": false,
      "likely_to_sell_out": true,
      "special_offer": false,
      "exclusive": false,
      "best_price": false,
      "daily": false,
      "languages": [],
      "group_size": [],
      "food": [],
      "services": [{"code": "audioguide", "name": "Con audioguida"}, {
        "code": "wheelchair",
        "name": "Accesso per disabili su sedia a rotelle"
      }, {"code": "dress-code", "name": "Dress Code"}],
      "features": [{"code": "musement-tour", "name": "features.musement-tour"}, {
        "code": "istant",
        "name": "CONFERMA ISTANTANEA"
      }, {"code": "skip", "name": "SALTA LA CODA"}, {
        "code": "official",
        "name": "RIVENDITORE UFFICIALE"
      }],
      "highlights": ["Accedi ai Musei Vaticani nel modo più rapido possibile con l'aiuto di un assistente", "Visita i musei e la Basilica di San Pietro al tuo ritmo e scopri informazioni interessanti con la tua audioguida", "Ammira gli incredibili affreschi di Michelangelo nella Cappella Sistina"],
      "included": ["Ingresso salta fila ai Musei Vaticani e alla Cappella Sistina con un coordinatore (ingresso nella fascia oraria selezionata)", "Ingresso salta fila alla Basilica di San Pietro", "Audioguida per i Musei Vaticani e la Basilica di San Pietro", "Auricolari (se selezionate)", "Tempo illimitato da trascorrere nei Musei Vaticani", "Costi di prenotazione"],
      "not_included": ["Trasporto"],
      "is_available_today": false,
      "is_available_tomorrow": true,
      "cover_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
      "service_fee": {
        "currency": "EUR",
        "value": 0,
        "formatted_value": "€ 0.00",
        "formatted_iso_value": "0,00 €"
      },
      "retail_price": {
        "currency": "EUR",
        "value": 35.9,
        "formatted_value": "€ 35.90",
        "formatted_iso_value": "35,90 €"
      },
      "retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 35.9,
        "formatted_value": "€ 35.90",
        "formatted_iso_value": "35,90 €"
      },
      "original_retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 35.9,
        "formatted_value": "€ 35.90",
        "formatted_iso_value": "35,90 €"
      },
      "original_retail_price": {
        "currency": "EUR",
        "value": 35.9,
        "formatted_value": "€ 35.90",
        "formatted_iso_value": "35,90 €"
      },
      "discount": 0,
      "categories": [{
        "id": 209,
        "name": "Attrazioni e tour guidati",
        "level": "1",
        "code": "new-attractions-guided-tours",
        "event_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/attrazioni-e-tour-guidati-c/"
      }, {
        "id": 214,
        "name": "Escursioni e tour in giornata",
        "level": "1",
        "code": "new-excursions-day-trips",
        "event_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/escursioni-e-tour-in-giornata-c/"
      }, {
        "id": 225,
        "name": "Turismo e tradizioni",
        "level": "2",
        "code": "new-sightseeing-traditions",
        "event_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/turismo-e-tradizioni-c/",
        "parent_id": 214
      }, {
        "id": 228,
        "name": "Folklore",
        "level": "3",
        "code": "new-folklore",
        "event_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/folklore-c/",
        "parent_id": 225
      }],
      "reviews_number": 3150,
      "reviews_avg": 4.4,
      "reviews_aggregated_info": {"1": 3, "2": 29, "3": 252, "4": 1387, "5": 1479},
      "latitude": 41.907069,
      "longitude": 12.453361,
      "url": "https://www.musement.com/it/roma/biglietti-salta-fila-per-musei-vaticani-e-basilica-di-san-pietro-con-audioguida-58754/",
      "flavours": [{
        "id": 112,
        "name": "Tour con audioguida",
        "active": true,
        "slug": "tour-con-audioguida"
      }],
      "verticals": [{
        "id": 1,
        "name": "Arte e musei",
        "active": true,
        "code": "arts-culture",
        "slug": "arte-e-musei",
        "url": "https://www.musement.com/it/arte-e-musei-t/",
        "meta_title": "Scopri il meraviglioso mondo dell'arte e dei musei",
        "meta_description": "Scopri le opere d'arte più famose del mondo con Musement, ammira i meravigliosi dipinti rinascimentali e le sculture rivoluzionarie delle avanguardie artistiche.",
        "cover_image_url": "https://images.musement.com/vertical/0001/30/art-and-culture_header-29023.jpeg?w=540",
        "relevance": 100
      }, {
        "id": 2,
        "name": "Tour e attrazioni",
        "active": true,
        "code": "sightseeing",
        "slug": "tour-e-attrazioni",
        "url": "https://www.musement.com/it/tour-e-attrazioni-t/",
        "meta_title": "Scopri i migliori tour e le attrazioni più belle",
        "meta_description": "Esplora ogni città con Musement come se fossi uno del posto. Non aspettare in fila per visitare le attrazioni più famose del mondo e scopri i luoghi meno conosciuti.",
        "cover_image_url": "https://images.musement.com/vertical/0001/31/sightseeing-00-jpg_header-30549.jpeg?w=540",
        "relevance": 90
      }],
      "giftable": false,
      "has_passenger_info": false,
      "has_extra_customer_data": false,
      "buy_multiplier": 1,
      "ticket": true,
      "free_cancellation": true
    },
    {
      "max_confirmation_time": "P0D",
      "cutoff_time": "PT12H",
      "booking_type": "CALENDAR-TIMESLOTS",
      "uuid": "d752296e-176f-413c-a61d-0b4931a54be8",
      "city": {
        "id": 2,
        "name": "Roma",
        "country": {"id": 82, "name": "Italia", "iso_code": "IT"},
        "cover_image_url": "https://images.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
        "url": "https://www.musement.com/it/roma/",
        "time_zone": "Europe/Rome"
      },
      "saves": 0,
      "title": "Tour salta fila per piccoli gruppi ai Musei Vaticani e alla Cappella Sistina",
      "relevance": 2930,
      "emergency_phone_number": "+393929547992",
      "relevance_venue": 2930,
      "must_see": true,
      "last_chance": false,
      "top_seller": false,
      "voucher_access_usage": "MOBILE",
      "temporary": false,
      "description": "Prenota un'affascinante visita guidata dei Musei Vaticani, di San Pietro e della Cappella Sistina con un biglietto salta fila e una guida esperta!",
      "about": "Questo tour per piccoli gruppi ti consente di scoprire le parti più interessanti del Vaticano con le spiegazioni e gli itinerari tracciati dalla tua guida esperta. Scopri le opere di Michelangelo e Raffaello all'interno della Cappella Sistina, esplora la Galleria degli Arazzi e la Galleria dei Candelabri. Il tour termina nella bellissima Piazza San Pietro.Come forse già saprai, il Vaticano nasconde così tanti tesori che è importante trovare un modo intelligente per visitarlo: salta le file all'ingresso e conosci le sue meravigliose collezioni con una guida locale professionista e un piccolo gruppo! Sarà un'esperienza che non dimenticherai facilmente.",
      "meeting_point": "Presenta il tuo voucher alla guida al punto d'incontro, in cima alla rampa di scale subito dopo il Caffè Vaticano.",
      "operational_days": "Controllare il calendario",
      "duration": "PT3H",
      "duration_range": {"min": "PT3H", "max": "PT3H"},
      "validity": "P0D",
      "has_price_info_on_date": true,
      "open": false,
      "ticket_not_included": false,
      "likely_to_sell_out": false,
      "special_offer": false,
      "exclusive": false,
      "best_price": false,
      "daily": false,
      "languages": [{"code": "en", "name": "Inglese"}, {"code": "it", "name": "Italiano"}],
      "group_size": [{"code": "small", "name": "Tour semi-privato"}],
      "food": [],
      "services": [],
      "features": [{"code": "musement-tour", "name": "features.musement-tour"}, {
        "code": "istant",
        "name": "CONFERMA ISTANTANEA"
      }, {"code": "skip", "name": "SALTA LA CODA"}],
      "highlights": ["Esplora i musei vaticani, la splendida Cappella Sistina e la Basilica di San Pietro", "Evita le lunghe code all'ingresso con il biglietto salta fila", "Scopri i tesori nascosti e meno conosciuti del Vaticano con la tua guida esperta"],
      "included": ["Biglietto d'ingresso e tassa di prenotazione per i Musei Vaticani", "Accesso alla Cappella Sistina", "Auricolari, quando necessario, per sentire sempre la tua guida", "Piccoli gruppi", "Guida turistica esperta"],
      "not_included": ["Mance", "Trasferimenti per e dall'hotel"],
      "is_available_today": true,
      "is_available_tomorrow": false,
      "cover_image_url": "https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540",
      "service_fee": {
        "currency": "EUR",
        "value": 0,
        "formatted_value": "€ 0.00",
        "formatted_iso_value": "0,00 €"
      },
      "retail_price": {
        "currency": "EUR",
        "value": 49.9,
        "formatted_value": "€ 49.90",
        "formatted_iso_value": "49,90 €"
      },
      "retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 49.9,
        "formatted_value": "€ 49.90",
        "formatted_iso_value": "49,90 €"
      },
      "original_retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 49.9,
        "formatted_value": "€ 49.90",
        "formatted_iso_value": "49,90 €"
      },
      "original_retail_price": {
        "currency": "EUR",
        "value": 49.9,
        "formatted_value": "€ 49.90",
        "formatted_iso_value": "49,90 €"
      },
      "discount": 0,
      "categories": [{
        "id": 209,
        "name": "Attrazioni e tour guidati",
        "level": "1",
        "code": "new-attractions-guided-tours",
        "event_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/attrazioni-e-tour-guidati-c/"
      }, {
        "id": 212,
        "name": "Monumenti",
        "level": "2",
        "code": "new-monuments",
        "event_image_url": "https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/monumenti-c/",
        "parent_id": 209
      }, {
        "id": 214,
        "name": "Escursioni e tour in giornata",
        "level": "1",
        "code": "new-excursions-day-trips",
        "event_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/escursioni-e-tour-in-giornata-c/"
      }, {
        "id": 225,
        "name": "Turismo e tradizioni",
        "level": "2",
        "code": "new-sightseeing-traditions",
        "event_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/turismo-e-tradizioni-c/",
        "parent_id": 214
      }, {
        "id": 228,
        "name": "Folklore",
        "level": "3",
        "code": "new-folklore",
        "event_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/48/thumb_147314_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/folklore-c/",
        "parent_id": 225
      }],
      "reviews_number": 63,
      "reviews_avg": 4.8,
      "reviews_aggregated_info": {"1": 0, "2": 0, "3": 0, "4": 12, "5": 51},
      "latitude": 41.907069,
      "longitude": 12.453361,
      "url": "https://www.musement.com/it/roma/tour-salta-fila-per-piccoli-gruppi-ai-musei-vaticani-e-alla-cappella-sistina-54316/",
      "flavours": [{"id": 111, "name": "Tour guidato", "active": true, "slug": "tour-guidato"}],
      "verticals": [{
        "id": 2,
        "name": "Tour e attrazioni",
        "active": true,
        "code": "sightseeing",
        "slug": "tour-e-attrazioni",
        "url": "https://www.musement.com/it/tour-e-attrazioni-t/",
        "meta_title": "Scopri i migliori tour e le attrazioni più belle",
        "meta_description": "Esplora ogni città con Musement come se fossi uno del posto. Non aspettare in fila per visitare le attrazioni più famose del mondo e scopri i luoghi meno conosciuti.",
        "cover_image_url": "https://images.musement.com/vertical/0001/31/sightseeing-00-jpg_header-30549.jpeg?w=540",
        "relevance": 90
      }],
      "giftable": true,
      "has_passenger_info": false,
      "has_extra_customer_data": true,
      "buy_multiplier": 1,
      "ticket": false,
      "free_cancellation": true
    },
    {
      "max_confirmation_time": "P0D",
      "cutoff_time": "P0D",
      "booking_type": "CALENDAR-TIMESLOTS",
      "uuid": "dc99d6d9-8cf3-4983-968e-e503907ca029",
      "city": {
        "id": 2,
        "name": "Roma",
        "country": {"id": 82, "name": "Italia", "iso_code": "IT"},
        "cover_image_url": "https://images.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
        "url": "https://www.musement.com/it/roma/",
        "time_zone": "Europe/Rome"
      },
      "saves": 0,
      "title": "Tour guidato salta fila dei Musei Vaticani e Cappella Sistina",
      "relevance": 2920,
      "relevance_venue": 2920,
      "must_see": false,
      "last_chance": false,
      "top_seller": false,
      "voucher_access_usage": "MOBILE",
      "temporary": false,
      "description": "Approfitta di questo ingresso salta fila per i Musei Vaticani e visita una grande attrazione di Roma, la Cappella Sistina.",
      "about": "Approfitta dell'ingresso salta fila per alcune delle attrazioni più importanti del Vaticano. Scopri i bellissimi Musei Vaticani e la Cappella Sistina, e rifatti gli occhi di fronte ai capolavori di grandi maestri come Michelangelo e Raffaello. Inoltre, visita il Museo Pio-Clementino, il Cortile del Belvedere e molto altro.Inizia il tour in direzione Musei Vaticani e lascia che la tua guida riporti in vita per te le opere d'arte presenti tra il Cortile della Pigna, la Galleria delle Carte Geografiche, la Galleria degli Arazzi, e la Galleria dei Candelabri. Nel corso della visita imparerai i dettagli più importanti della vita degli artisti responsabili per queste opere e la loro affascinante storia.\nSuccessivamente, sarai portato ad ammirare l'incantevole Cappella Sistina: qui, potrai trascorrere tutto il tempo necessario per prendere nota di quello di cui hai sempre sentito – l'autoritratto di Michelangelo, per esempio, in cui esprime al mondo che avrebbe preferito essere spellato vivo che dipingere di nuovo la Cappella. Per quanto incredibile sia quest'opera, deve essere stata sfiancante – qualcosa che capirai meglio una volta appreso cosa serve per creare un affresco.",
      "meeting_point": "Viale Vaticano, 97 - Roma, a 50 metri dall'ingresso dei Musei Vaticani",
      "operational_days": "Tutti i giorni eccetto le domeniche",
      "duration": "PT2H30M",
      "duration_range": {"max": "PT2H30M"},
      "validity": "P0D",
      "has_price_info_on_date": true,
      "open": false,
      "ticket_not_included": false,
      "likely_to_sell_out": true,
      "special_offer": false,
      "exclusive": false,
      "best_price": false,
      "daily": false,
      "languages": [{"code": "en", "name": "Inglese"}, {
        "code": "it",
        "name": "Italiano"
      }, {"code": "fr", "name": "Francese"}, {"code": "es", "name": "Spagnolo"}, {
        "code": "de",
        "name": "Tedesco"
      }, {"code": "pt", "name": "Portoghese"}, {"code": "ru", "name": "Russo"}, {
        "code": "pl",
        "name": "Polacco"
      }],
      "group_size": [],
      "food": [],
      "services": [],
      "features": [{"code": "istant", "name": "CONFERMA ISTANTANEA"}, {
        "code": "skip",
        "name": "SALTA LA CODA"
      }],
      "highlights": ["Vivi la grandiosità della Cappella Sistina con un tour guidato", "Ammira i fantastici capolavori di Michelangelo, Raffaello e del Bernini"],
      "included": ["Tour guidato con guida ufficiale", "Ingresso e spese prenotazione", "Ingresso salta fila ai Musei Vaticani e alla Cappella Sistina", "Wi-Fi gratuito al punto d'incontro", "Auricolari"],
      "not_included": [],
      "is_available_today": false,
      "is_available_tomorrow": true,
      "cover_image_url": "https://images.musement.com/cover/0001/87/thumb_86171_cover_header.jpeg?w=540",
      "service_fee": {
        "currency": "EUR",
        "value": 0,
        "formatted_value": "€ 0.00",
        "formatted_iso_value": "0,00 €"
      },
      "retail_price": {
        "currency": "EUR",
        "value": 55,
        "formatted_value": "€ 55.00",
        "formatted_iso_value": "55,00 €"
      },
      "retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 55,
        "formatted_value": "€ 55.00",
        "formatted_iso_value": "55,00 €"
      },
      "original_retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 55,
        "formatted_value": "€ 55.00",
        "formatted_iso_value": "55,00 €"
      },
      "original_retail_price": {
        "currency": "EUR",
        "value": 55,
        "formatted_value": "€ 55.00",
        "formatted_iso_value": "55,00 €"
      },
      "discount": 0,
      "categories": [{
        "id": 209,
        "name": "Attrazioni e tour guidati",
        "level": "1",
        "code": "new-attractions-guided-tours",
        "event_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/attrazioni-e-tour-guidati-c/"
      }, {
        "id": 212,
        "name": "Monumenti",
        "level": "2",
        "code": "new-monuments",
        "event_image_url": "https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/monumenti-c/",
        "parent_id": 209
      }],
      "reviews_number": 488,
      "reviews_avg": 4.3,
      "reviews_aggregated_info": {"1": 0, "2": 9, "3": 71, "4": 167, "5": 241},
      "latitude": 41.906918,
      "longitude": 12.452657,
      "url": "https://www.musement.com/it/roma/tour-guidato-salta-fila-dei-musei-vaticani-e-cappella-sistina-20598/",
      "flavours": [{"id": 111, "name": "Tour guidato", "active": true, "slug": "tour-guidato"}],
      "verticals": [{
        "id": 1,
        "name": "Arte e musei",
        "active": true,
        "code": "arts-culture",
        "slug": "arte-e-musei",
        "url": "https://www.musement.com/it/arte-e-musei-t/",
        "meta_title": "Scopri il meraviglioso mondo dell'arte e dei musei",
        "meta_description": "Scopri le opere d'arte più famose del mondo con Musement, ammira i meravigliosi dipinti rinascimentali e le sculture rivoluzionarie delle avanguardie artistiche.",
        "cover_image_url": "https://images.musement.com/vertical/0001/30/art-and-culture_header-29023.jpeg?w=540",
        "relevance": 100
      }, {
        "id": 2,
        "name": "Tour e attrazioni",
        "active": true,
        "code": "sightseeing",
        "slug": "tour-e-attrazioni",
        "url": "https://www.musement.com/it/tour-e-attrazioni-t/",
        "meta_title": "Scopri i migliori tour e le attrazioni più belle",
        "meta_description": "Esplora ogni città con Musement come se fossi uno del posto. Non aspettare in fila per visitare le attrazioni più famose del mondo e scopri i luoghi meno conosciuti.",
        "cover_image_url": "https://images.musement.com/vertical/0001/31/sightseeing-00-jpg_header-30549.jpeg?w=540",
        "relevance": 90
      }],
      "giftable": true,
      "has_passenger_info": true,
      "has_extra_customer_data": true,
      "buy_multiplier": 1,
      "ticket": false,
      "free_cancellation": true
    },
    {
      "max_confirmation_time": "P0D",
      "cutoff_time": "P0D",
      "booking_type": "CALENDAR-TIMESLOTS",
      "uuid": "b00dcdb2-69e6-427f-8728-226d80e97e52",
      "city": {
        "id": 2,
        "name": "Roma",
        "country": {"id": 82, "name": "Italia", "iso_code": "IT"},
        "cover_image_url": "https://images.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
        "url": "https://www.musement.com/it/roma/",
        "time_zone": "Europe/Rome"
      },
      "saves": 0,
      "title": "Tour guidato del Vaticano: Musei e Cappella Sistina",
      "relevance": 2919,
      "emergency_phone_number": "+390683360561",
      "relevance_venue": 1602,
      "must_see": false,
      "last_chance": false,
      "top_seller": false,
      "voucher_access_usage": "MOBILE",
      "temporary": false,
      "description": "Prenota la tua visita guidata ai Musei Vaticani e Cappella Sistina. Meno tempo in fila, più tempo per l'arte!",
      "about": "Ottieni il massimo dalla tua visita e scopri al meglio tutti i tesori del Vaticano! Evita le lunghe code e scopri le affascinanti collezioni con una guida professionista.La tua esperienza ti permetterà di accedere ai Musei Vaticani e di ammirare le grandiose opere di Michelangelo e Raffaello. Visita i famosi cortili della città del Vaticano, la Galleria degli Arazzi e la Galleria dei Candelabri. Cogli l'occasione di ammirare la Cappella Sistina, il capolavoro indiscusso di Michelangelo. Infine, uscendo su Piazza San Pietro, potrai vedere l'illusione ottica del colonnato progettato da Gian Lorenzo Bernini.",
      "meeting_point": "Assicurati di arrivare al punto d'incontro 15 minuti prima della partenza del tour. I coordinatori del tour indosseranno magliette o giacche blu per un facile riconoscimento.\nincontraci all'angolo tra Viale Vaticano e Via Tunisi, tra il Caffè Vaticano e l'Hotel Alimandi Vaticano. La tua guida aspetterà in fondo agli ampi gradini attraverso la strada dall'entrata dei Musei Vaticani. La fermata della metropolitana più vicina è sulla linea A (linea rossa): Ottaviano - Musei Vaticani",
      "operational_days": "Variabile",
      "duration": "PT2H30M",
      "duration_range": {"max": "PT2H30M"},
      "validity": "P0D",
      "has_price_info_on_date": true,
      "open": false,
      "ticket_not_included": false,
      "likely_to_sell_out": false,
      "special_offer": true,
      "exclusive": false,
      "best_price": false,
      "daily": false,
      "languages": [{"code": "en", "name": "Inglese"}, {
        "code": "it",
        "name": "Italiano"
      }, {"code": "fr", "name": "Francese"}, {"code": "es", "name": "Spagnolo"}, {
        "code": "de",
        "name": "Tedesco"
      }],
      "group_size": [],
      "food": [],
      "services": [],
      "features": [{"code": "istant", "name": "CONFERMA ISTANTANEA"}, {
        "code": "skip",
        "name": "SALTA LA CODA"
      }],
      "highlights": ["Visita luoghi imperdibili come i cortili della Città del Vaticano, la Galleria degli Arazzi e la Cappella Sistina", "Ammira i panorami e la bellezza del Vaticano", "Ottieni un'esperienza più personalizzata scegliendo il tour per piccoli gruppi"],
      "included": ["Biglietto d'ingresso Musei Vaticani e tassa di prenotazione", "Esperta guida turistica", "Ingresso riservato ai musei", "Accesso alla Cappella Sistina"],
      "not_included": ["Mance", "Servizio di pick up e drop-off"],
      "is_available_today": false,
      "is_available_tomorrow": true,
      "cover_image_url": "https://images.musement.com/cover/0004/77/thumb_376608_cover_header.jpeg?w=540",
      "service_fee": {
        "currency": "EUR",
        "value": 0,
        "formatted_value": "€ 0.00",
        "formatted_iso_value": "0,00 €"
      },
      "retail_price": {
        "currency": "EUR",
        "value": 52,
        "formatted_value": "€ 52.00",
        "formatted_iso_value": "52,00 €"
      },
      "retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 52,
        "formatted_value": "€ 52.00",
        "formatted_iso_value": "52,00 €"
      },
      "original_retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 52,
        "formatted_value": "€ 52.00",
        "formatted_iso_value": "52,00 €"
      },
      "original_retail_price": {
        "currency": "EUR",
        "value": 52,
        "formatted_value": "€ 52.00",
        "formatted_iso_value": "52,00 €"
      },
      "discount": 0,
      "categories": [{
        "id": 209,
        "name": "Attrazioni e tour guidati",
        "level": "1",
        "code": "new-attractions-guided-tours",
        "event_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/attrazioni-e-tour-guidati-c/"
      }, {
        "id": 212,
        "name": "Monumenti",
        "level": "2",
        "code": "new-monuments",
        "event_image_url": "https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/monumenti-c/",
        "parent_id": 209
      }],
      "reviews_number": 3277,
      "reviews_avg": 4.6,
      "reviews_aggregated_info": {"1": 0, "2": 7, "3": 74, "4": 1196, "5": 2000},
      "latitude": 41.906938,
      "longitude": 12.453168,
      "url": "https://www.musement.com/it/roma/tour-guidato-del-vaticano-musei-e-cappella-sistina-88080/",
      "flavours": [{"id": 111, "name": "Tour guidato", "active": true, "slug": "tour-guidato"}],
      "verticals": [{
        "id": 1,
        "name": "Arte e musei",
        "active": true,
        "code": "arts-culture",
        "slug": "arte-e-musei",
        "url": "https://www.musement.com/it/arte-e-musei-t/",
        "meta_title": "Scopri il meraviglioso mondo dell'arte e dei musei",
        "meta_description": "Scopri le opere d'arte più famose del mondo con Musement, ammira i meravigliosi dipinti rinascimentali e le sculture rivoluzionarie delle avanguardie artistiche.",
        "cover_image_url": "https://images.musement.com/vertical/0001/30/art-and-culture_header-29023.jpeg?w=540",
        "relevance": 100
      }, {
        "id": 2,
        "name": "Tour e attrazioni",
        "active": true,
        "code": "sightseeing",
        "slug": "tour-e-attrazioni",
        "url": "https://www.musement.com/it/tour-e-attrazioni-t/",
        "meta_title": "Scopri i migliori tour e le attrazioni più belle",
        "meta_description": "Esplora ogni città con Musement come se fossi uno del posto. Non aspettare in fila per visitare le attrazioni più famose del mondo e scopri i luoghi meno conosciuti.",
        "cover_image_url": "https://images.musement.com/vertical/0001/31/sightseeing-00-jpg_header-30549.jpeg?w=540",
        "relevance": 90
      }],
      "giftable": false,
      "has_passenger_info": false,
      "has_extra_customer_data": false,
      "buy_multiplier": 1,
      "ticket": false,
      "free_cancellation": true
    },
    {
      "max_confirmation_time": "P0D",
      "cutoff_time": "P0D",
      "booking_type": "NO-CALENDAR-FIXED-VALIDITY",
      "uuid": "10212b92-2046-11e7-9cc9-06a7e332783f",
      "city": {
        "id": 2,
        "name": "Roma",
        "country": {"id": 82, "name": "Italia", "iso_code": "IT"},
        "cover_image_url": "https://images.musement.com/cover/0002/37/top-view-of-rome-city-skyline-from-castel-sant-angelo-jpg_header-136539.jpeg",
        "url": "https://www.musement.com/it/roma/",
        "time_zone": "Europe/Rome"
      },
      "saves": 0,
      "title": "OMNIA Pass Vaticano e Roma 72 ore con trasporto",
      "relevance": 30,
      "relevance_venue": 1601,
      "must_see": false,
      "last_chance": false,
      "top_seller": false,
      "voucher_access_usage": "PRINTED",
      "temporary": false,
      "description": "Visita Roma e i suoi monumenti senza fare file con l'Omnia Roma Pass e ammira le bellezze della città comodamente seduto sul bus turistico.",
      "about": "Vivi Roma \"all inclusive\" grazie all'Omnia Roma Pass. Si tratta di un pacchetto di servizi che ti consente di accedere alle principali attrazioni della capitale d'Italia, una combinazione perfetta per chi vuole scoprire di più sulla storia del cristianesimo o la storia e l'arte di Roma.Questo city pass include l'ingresso prioritario ai Musei Vaticani, Colosseo, Basilica di San Pietro e Cappella Sistina. Il pass ti darà la possibilità di avere l'ingresso gratuito a 2 delle 4 principali attrazioni di Roma, nonché riduzioni sul prezzo dei biglietti di altre 30 attrazioni e una travel card. L'Omnia Pass ti dà anche la possibilità di visitare le principali attrazioni della Città del Vaticano. Inoltre, per tre giorni potrai salire liberamente su un autobus turistico hop-on hop-off! Divertiti e vivi la città eterna evitando code, problemi e stress!Per vedere tutte le attrazioni incluse nell'Omnia Pass, si prega di consultare QUESTO PDF.",
      "meeting_point": "Ritira il tuo pass OMNIA a uno dei seguenti indirizzi:\n- O.R.P. Collection Desk - Piazza Pio XII, 9 (Basilica di San Pietro, nell'angolo in fondo a sinistra della piazza). Aperto dal lunedì al sabato dalle 10:00 alle 17:00. Domenica e festivi dalle 10:00 alle 13: 00\n- O.R.P. Collection Desk - Largo Argentina, Via dei Cestari 21 (Pantheon). Aperto dal lunedì al sabato dalle 10:00 alle 16:00; domenica e festivi: 10.00 - 13.00\n- O.R.P. Collection Desk - Piazza di Porta S.Giovanni, (all'interno della Basilica di San Giovanni in Laterano sul lato destro dopo il controllo di polizia). Aperto dal lunedì al sabato dalle 10:00 alle 17:00. Domenica e festivi dalle 10:00 alle 13:00\n- O.R.P. Collection Desk - Carcer Tullianum, Clivo Argentario (Cancer Tullianum). Aperto dal lunedì al sabato dalle 10:00 alle 17:00. Domenica e festivi dalle 10:00 alle 13:00",
      "operational_days": "Tutti i giorni",
      "duration": "PT72H",
      "duration_range": {"max": "PT72H"},
      "validity": "P0D",
      "has_price_info_on_date": true,
      "open": true,
      "ticket_not_included": false,
      "likely_to_sell_out": false,
      "special_offer": false,
      "exclusive": false,
      "best_price": false,
      "daily": false,
      "languages": [],
      "group_size": [],
      "food": [],
      "services": [{"code": "audioguide", "name": "Con audioguida"}, {
        "code": "dress-code",
        "name": "Dress Code"
      }],
      "features": [{"code": "istant", "name": "CONFERMA ISTANTANEA"}, {
        "code": "fast",
        "name": "INGRESSO PRIORITARIO"
      }],
      "highlights": ["Visita le principali attrazioni di Roma e della Città del Vaticano approfittando di sconti e agevolazioni", "Accedi saltando la fila a Musei Vaticani, Colosseo, Basilica di San Pietro e Cappella Sistina", "Muoviti autonomamente per la città a bordo degli autobus turistici hop-on hop-off"],
      "included": ["OMNIA Vatican and Roma Pass valido per 72 ore", "Ingresso gratuito ai Musei Vaticani e alla Cappella Sistina", "Ingresso gratuito per 2 punti di riferimento a scelta", "Tour gratuito di 3 giorni in autobus Hop on Hop off", "Ingresso rapido ad alcuni dei monumenti più iconici del mondo", "Facile viaggiare per la città con una carta di trasporto"],
      "not_included": [],
      "is_available_today": true,
      "is_available_tomorrow": true,
      "cover_image_url": "https://images.musement.com/cover/0142/96/thumb_14195255_cover_header.png?w=540",
      "service_fee": {
        "currency": "EUR",
        "value": 0,
        "formatted_value": "€ 0.00",
        "formatted_iso_value": "0,00 €"
      },
      "retail_price": {
        "currency": "EUR",
        "value": 113,
        "formatted_value": "€ 113.00",
        "formatted_iso_value": "113,00 €"
      },
      "retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 113,
        "formatted_value": "€ 113.00",
        "formatted_iso_value": "113,00 €"
      },
      "original_retail_price_without_service_fee": {
        "currency": "EUR",
        "value": 113,
        "formatted_value": "€ 113.00",
        "formatted_iso_value": "113,00 €"
      },
      "original_retail_price": {
        "currency": "EUR",
        "value": 113,
        "formatted_value": "€ 113.00",
        "formatted_iso_value": "113,00 €"
      },
      "discount": 0,
      "categories": [{
        "id": 185,
        "name": "Attività",
        "level": "1",
        "code": "new-activities",
        "event_image_url": "https://images.musement.com/cover/0002/35/thumb_134440_cover_header.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/35/thumb_134440_cover_header.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/attivita-c/"
      }, {
        "id": 190,
        "name": "Attività in città",
        "level": "2",
        "code": "new-city-activities",
        "event_image_url": "https://images.musement.com/cover/0142/96/thumb_14195255_cover_header.png?w=540",
        "cover_image_url": "https://images.musement.com/cover/0142/96/thumb_14195255_cover_header.png?w=540",
        "url": "https://www.musement.com/it/roma/attivita-in-citta-c/",
        "parent_id": 185
      }, {
        "id": 192,
        "name": "Hop-On Hop-Off",
        "level": "3",
        "code": "new-hop-on-hop-off",
        "event_image_url": "https://images.musement.com/cover/0142/96/thumb_14195255_cover_header.png?w=540",
        "cover_image_url": "https://images.musement.com/cover/0142/96/thumb_14195255_cover_header.png?w=540",
        "url": "https://www.musement.com/it/roma/hop-on-hop-off-c/",
        "parent_id": 190
      }, {
        "id": 209,
        "name": "Attrazioni e tour guidati",
        "level": "1",
        "code": "new-attractions-guided-tours",
        "event_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "cover_image_url": "https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg?w=540",
        "url": "https://www.musement.com/it/roma/attrazioni-e-tour-guidati-c/"
      }, {
        "id": 210,
        "name": "Pass turistici",
        "level": "2",
        "code": "new-city-passes",
        "event_image_url": "https://images.musement.com/cover/0142/96/thumb_14195255_cover_header.png?w=540",
        "cover_image_url": "https://images.musement.com/cover/0142/96/thumb_14195255_cover_header.png?w=540",
        "url": "https://www.musement.com/it/roma/pass-turistici-1-c/",
        "parent_id": 209
      }],
      "reviews_number": 50,
      "reviews_avg": 4.5,
      "reviews_aggregated_info": {"1": 0, "2": 0, "3": 0, "4": 27, "5": 23},
      "url": "https://www.musement.com/it/roma/omnia-pass-vaticano-e-roma-72-ore-con-trasporto-1916/",
      "flavours": [{
        "id": 2,
        "name": "Biglietti d'ingresso",
        "active": true,
        "slug": "biglietti-d-ingresso"
      }],
      "verticals": [{
        "id": 2,
        "name": "Tour e attrazioni",
        "active": true,
        "code": "sightseeing",
        "slug": "tour-e-attrazioni",
        "url": "https://www.musement.com/it/tour-e-attrazioni-t/",
        "meta_title": "Scopri i migliori tour e le attrazioni più belle",
        "meta_description": "Esplora ogni città con Musement come se fossi uno del posto. Non aspettare in fila per visitare le attrazioni più famose del mondo e scopri i luoghi meno conosciuti.",
        "cover_image_url": "https://images.musement.com/vertical/0001/31/sightseeing-00-jpg_header-30549.jpeg?w=540",
        "relevance": 90
      }],
      "giftable": true,
      "has_passenger_info": false,
      "has_extra_customer_data": false,
      "buy_multiplier": 1,
      "ticket": false,
      "free_cancellation": false
    }
  ]
))

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AppProductsList.vue', () => {
  let wrapper, mutations, store
  mutations = {
    SET_PRODUCTS: jest.fn()
  }
  store = new Vuex.Store({
    mutations
  })
  beforeEach(() => {
    wrapper = shallowMount(AppProductsList, {
      store,
      localVue
    })
  })

  it('renders', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('render list', () => {
    expect(wrapper.find('.product-list')).toBeTruthy()
  })

})
