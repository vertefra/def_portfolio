export const extractTagsFrequency = (projectTags) => {
	const projects = projectTags.length;
	let strings = '';
	for (let tagString of projectTags) {
		strings += ', ' + tagString.tags;
	}

	const tags = strings.split(', ');
	const freq = {};

	for (let tag of tags) {
		if (tag) {
			freq[tag] = freq[tag] + 1 || 1;
		}
	}

	// trasfor in percentage
	for (let key in freq) {
		freq[key] = (freq[key] / projects).toFixed(2);
	}
	return freq;
};
