import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			"title": "Perfume guide",
			"subtitle_part_1": "with founder Jean-Philippe",
			"subtitle_part_2": "and perfumer Marie Salamagne",
			"description": "Select the videos matching the samples in your discovery set, and let us unveil the emotions and behind the scenes of each fragrance.",
			"memory_lane_title": "Memory Lane Collection",
			"frivolite_title": "Frivolité Collection",
			"noire_title": "Black Collection",
			"blanche_title": "White Collection",
			"eaux_title": "Eaux Collection",
			"riviera_title": "Riviera Collection",
		}
	},
	fr: {
		translation: {
			"title": "Guide des parfums",
			"subtitle_part_1": "avec le fondateur Jean-Philippe",
			"subtitle_part_2": "et la parfumeuse Marie Salamagne",
			"description": "Sélectionnez les vidéos correspondant aux échantillons de votre coffret découverte, et laissez-nous dévoiler les émotions et les coulisses de chaque fragrance.",
			"memory_lane_title": "Collection Memory Lane",
			"frivolite_title": "Collection Frivolité",
			"noire_title": "Collection Noire",
			"blanche_title": "Collection Blanche",
			"eaux_title": "Collection Eaux",
			"riviera_title": "Collection Riviera",
		}
	}
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: navigator.language.startsWith('fr') ? 'fr' : 'en',
		fallBackLng: 'en',
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;