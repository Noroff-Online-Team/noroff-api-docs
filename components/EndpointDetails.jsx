/**
 * Endpoint method and path component
 * @param {string} method - HTTP method of the endpoint (GET, POST, PUT, DELETE) (default: GET)
 * @param {string} path - Path of the endpoint (e.g. /jokes/random)
 * @returns {JSX.Element} Endpoint details component
 */
export function EndpointDetails({ method = 'GET', path }) {
  let methodColor = ''
  switch (method) {
    case 'GET':
      methodColor =
        'ring-green-300 dark:ring-green-500/30 bg-green-400/10 text-green-700 dark:text-green-300'
      break
    case 'POST':
      methodColor =
        'ring-blue-300 dark:ring-blue-500/30 bg-blue-400/10 text-blue-700 dark:text-blue-300'
      break
    case 'PUT':
      methodColor =
        'ring-yellow-300 dark:ring-yellow-500/30 bg-yellow-400/10 text-yellow-700 dark:text-yellow-300'
      break
    case 'DELETE':
      methodColor =
        'ring-red-300 dark:ring-red-500/30 bg-red-400/10 text-red-700 dark:text-red-300'
      break
  }

  return (
    <div className="flex items-center gap-x-2 mt-4 font-semibold font-mono">
      <span
        className={`leading-7 rounded-lg text-[0.75rem] px-2 ring-1 ring-inset ${methodColor}`}
      >
        {method}
      </span>
      <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
      <span className="font-medium tracking-tight text-zinc-700 dark:text-zinc-300">
        {path}
      </span>
    </div>
  )
}
