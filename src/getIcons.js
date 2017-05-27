/* eslint-disable new-cap */
import { getImageSource } from 'react-native-vector-icons/Entypo';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
	'shop': [50, '#000000'],

};

//icon path temp
// /Users/apple/Library/Developer/CoreSimulator/Devices/E5B321BA-E1C2-4725-BE98-E7DD6F7D97AC/data/
//Containers/Data/Application/746A82F6-FCBE-4F17-A03E-82BDCD1A6266/tmp


const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
	new Promise.all(
		Object.keys(icons).map(iconName =>
		// IconName--suffix--other-suffix is just the mapping name in iconsMap
		getImageSource(
		iconName.replace(replaceSuffixPattern, ''),
		icons[iconName][0],
		icons[iconName][1]
		))
	).then(sources => {
		Object.keys(icons)
		.forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

		// Call resolve (and we are done)
		resolve(true);
	});
});

export {
	iconsMap,
	iconsLoaded
};
