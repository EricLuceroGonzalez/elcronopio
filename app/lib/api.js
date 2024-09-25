// /app/lib/api.js
const fs = require('fs');
const { join } = require('path');
const matter = require('gray-matter');

const postsDirectory = join(process.cwd(), '/app/_posts');

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content };
}

function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

module.exports = {
  getPostSlugs,
  getPostBySlug,
  getAllPosts,
};
