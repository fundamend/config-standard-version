const name = process.env.npm_package_name;

module.exports = {
	path: '.',
	releaseCommitMessageFormat: `chore(release): ${name}@{{currentTag}}`,
};
