import { useConfig } from 'nextra-theme-docs'

export default {
  docsRepositoryBase: 'https://github.com/NoroffFEU/noroff-api-docs',
  project: {
    link: 'https://github.com/NoroffFEU/noroff-api-docs',
  },
  gitTimestamp: false,
  sidebar: {
    toggleButton: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Noroff</span>
      <span className="text-gray-400 font-normal hidden md:inline">
        API Docs
      </span>
    </>
  ),
  head: () => {
    const { title } = useConfig()

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={`${title} - Noroff API documentation`}
        />
        <meta name="apple-mobile-web-app-title" content="Noroff API docs" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Noroff API Documentation',
    }
  },
  footer: {
    text: <>MIT {new Date().getFullYear()} © Noroff.</>,
  },
}
