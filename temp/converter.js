const fs = require('fs');

const PATH = './exportedWordsFromAnki';
const NEW_PATH = './new';

fs.readdir(PATH, (err, fileNames) => {
	fileNames.map(fileName => {
		const result = fs.readFileSync(`${PATH}/${fileName}`, 'utf-8');
		const fileStrings = result.split('\n');

		const
	});

});
