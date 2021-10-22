// const fs = require('fs');
let fileNames: string[] | undefined = undefined;

/*fs.readdir('./json/words', (err: Error | null, files: string[] | undefined) => {
  fileNames = files;
});*/

const load = (fileName: number) => {
  return import(`./jsons/words/${fileName}`).then((module) => module.default);
};

export const LEVEL_PREFIXES = {
  4: 'L4',
  5: 'L5',
  6: 'L6',
  7: 'L7',
  8: 'L8'
};

export type Word = {
  ru: string;
  en: string;
};

export default class GrammarRules {
  getAllCollectionNames() {
    return fileNames;
  }

  get(level: number): Promise<Word[]> {
    return load(level);
  }
}
