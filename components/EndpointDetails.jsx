/**
 * Endpoint method and path component
 * @param {string} method - HTTP method of the endpoint (GET, POST, PUT, DELETE) (default: GET)
 * @param {string} path - Path of the endpoint (e.g. /jokes/random)
 * @returns {JSX.Element} Endpoint details component
 */
export function EndpointDetails({ method = 'GET', path }) {
  return (
    <div className="flex items-center gap-x-3 mt-4">
      <span className="font-semibold leading-6 rounded-lg px-2 py-1 ring-1 ring-inset ring-slate-300 dark:ring-slate-500/30 bg-slate-400/10 text-slate-700 dark:text-slate-300">
        {method}
      </span>
      <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
      <span className="font-semibold tracking-tight text-lg text-slate-700 dark:text-slate-100">
        {path}
      </span>
    </div>
  )
}
