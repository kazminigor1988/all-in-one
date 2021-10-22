const fs = require('fs');

const PATH = './exportedWordsFromAnki';
const NEW_PATH = './new/';

fs.readdir(PATH, (err, fileNames) => {
	fileNames.map(fileName => {
		const result = fs.readFileSync(`${PATH}/${fileName}`, 'utf-8');
		const fileStrings = result.split('\n');
		const wordsPairs = [];

		fileStrings.forEach(row => {
			if (!row) return;

			const [ru, en] = row.split('\t');

			wordsPairs.push({ru, en});
		});

		fs.writeFileSync(`${NEW_PATH}${fileName}`, JSON.stringify(wordsPairs));
	});
});
