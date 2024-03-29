import { useConfig } from 'nextra-theme-docs'
import { Description } from './components'

export default {
  docsRepositoryBase: 'https://github.com/NoroffFEU/noroff-api-docs/tree/main',
  project: {
    link: 'https://github.com/NoroffFEU/noroff-api-docs',
  },
  primaryHue: 193,
  gitTimestamp: <></>,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  navigation: {
    prev: true,
    next: true,
  },
  components: {
    p: (props) => <Description {...props} />,
  },
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
        <path
          fill="currentColor"
          d="m6.809 10.55.003 10.157 4.52 5.383c2.484 2.96 4.55 5.414 4.586 5.45.062.062.36-.282 2.848-3.247 1.527-1.824 2.785-3.336 2.793-3.36.015-.042-2.344-2.05-2.434-2.07-.031-.008-.75.82-1.602 1.84l-1.546 1.852-.094-.117-2.992-3.567-2.899-3.445v-6.63c0-5.222.012-6.616.055-6.562.027.04 2.832 3.383 6.23 7.438l6.18 7.367h2.781V.4h-9.281v3.269h6.012l-.004 5.8v5.802l-.106-.133c-.058-.07-2.859-3.414-6.222-7.426L9.523.418 8.164.41 6.804.398l.005 10.153"
        />
      </svg>
      <div className="flex flex-col -space-y-1">
        <span className="font-bold">Noroff API</span>
        <span className="text-sm font-normal text-gray-500">Documentation</span>
      </div>
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
