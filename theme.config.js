export default {
  github: 'https://github.com/jaaneh/noroff-api-docs',
  docsRepositoryBase: 'https://github.com/jaaneh/noroff-api-docs/tree/main',
  titleSuffix: ' – Noroff API Documentation',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Noroff</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        API Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Noroff API documentation" />
      <meta name="apple-mobile-web-app-title" content="Noroff API docs" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Noroff.</>,
}
