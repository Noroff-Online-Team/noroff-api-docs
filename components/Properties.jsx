import { Description } from './Description'

/**
 * List of properties for a model.
 * @param {Object} props - Props
 * @param {{ name: string, type: string, description: string }[]} props.options - Array of options
 * @returns {JSX.Element} - List of properties for a model.
 */
export function Properties({ options }) {
  return (
    <>
      <h3 className="font-semibold mb-2 mt-10 text-base dark:text-white">
        Properties
      </h3>
      <div className="my-6">
        <ul
          role="list"
          className="m-0 list-none divide-y divide-gray-200 p-0 dark:divide-neutral-700/50 max-w-[30rem]"
        >
          {options.map(([name, type, description]) => (
            <li className="m-0 px-0 py-4 first:pt-0 last:pb-0" key={name}>
              <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-1">
                <dt className="sr-only">Name</dt>
                <dd>
                  <span className="leading-7 font-mono text-[#18181b] dark:text-white rounded-lg px-[0.375rem] py-1 bg-zinc-100 dark:bg-[rgba(63,63,70,0.15)] text-[0.75rem] shadow-[inset_0_0_0_1px_rgb(212,212,216)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                    {name}
                  </span>
                </dd>
                <dt className="sr-only">Type</dt>
                <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {type}
                </dd>
                <dt className="sr-only">Description</dt>
                <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0 dark:text-[#a1a1aa] text-sm leading-7">
                  <p>{description}</p>
                </dd>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
