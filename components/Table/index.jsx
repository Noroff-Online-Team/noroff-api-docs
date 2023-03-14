import styles from './style.module.css'

export function OptionTable({ options }) {
  return (
    <div
      className={
        '-mx-6 mt-4 mb-4 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
        styles.container
      }
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b py-4 text-left border-gray-300 dark:border-neutral-700">
            <th className="py-2 font-semibold">Property</th>
            <th className="py-2 pl-6 font-semibold">Type</th>
            <th className="py-2 px-6 font-semibold">Description</th>
            <th className="py-2 px-6 font-semibold">Required</th>
          </tr>
        </thead>
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {options.map(([property, type, description, required]) => (
            <tr
              key={property}
              className="border-b border-gray-200 dark:border-neutral-700/50"
            >
              <td className="whitespace-pre py-2 font-mono text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500">
                {property}
              </td>
              <td className="whitespace-pre py-2 pl-6 font-mono text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {type}
              </td>
              <td className="py-2 pl-6">{description}</td>
              <td className="py-2 pl-6">{required}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
