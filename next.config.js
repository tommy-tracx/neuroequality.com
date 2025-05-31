const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repo = 'neuroequality';

module.exports = {
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
};
