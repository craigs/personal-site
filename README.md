## Running the application

`npm run dev`

## Production deployment

# Getting started

Signup for accounts on these services ...

- Zeit Now
- GraphCMS

## Configuring models

The following GraphCMS models are used in this system ...

- [Article](docs/models/Article.md)
- [Book](docs/models/Book.md)
- [Podcast](docs/models/Podcast.md)

You will need to create the models according the specifications above in order
for this site to function.

## Configuring GraphCMS API

Set the GRAPHCMS_API environment API endpoint in
[next.config.js](next.config.js)

You will want to ensure that the GraphCMS API is open to the public and read
only.

## Running the server

Install dependencies with `npm i`
Run the development server with `npm run dev`

You will now be able to access the server on `http://localhost:3000`
