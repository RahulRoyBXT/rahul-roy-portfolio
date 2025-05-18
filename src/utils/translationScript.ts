// import { enTranslations } from '../context/LanguageContext';
// import { translateObjectToJapanese, extractNewStringsForTranslation } from './translator';

// export async function translateAll() {
//   console.log('Starting translation of all strings...');
//   const japaneseTranslations = await translateObjectToJapanese(enTranslations);
  
//   console.log('Translation complete! Copy this into your LanguageContext:');
//   console.log(JSON.stringify({ ja: japaneseTranslations }, null, 2));
  
//   return japaneseTranslations;
// }

// export async function translateNewStrings(currentJapaneseTranslations: Record<string, string>) {

//   const newStrings = extractNewStringsForTranslation(enTranslations, currentJapaneseTranslations);
  
//   console.log(`Found ${Object.keys(newStrings).length} new strings to translate`);
  
//   if (Object.keys(newStrings).length === 0) {
//     console.log('No new strings to translate!');
//     return currentJapaneseTranslations;
//   }
  
//   // Translate only the new strings
//   const newTranslations = await translateObjectToJapanese(newStrings);
  
//   // Merge with existing translations
//   const updatedTranslations = {
//     ...currentJapaneseTranslations,
//     ...newTranslations
//   };
// ;  
//   return updatedTranslations;
// }
