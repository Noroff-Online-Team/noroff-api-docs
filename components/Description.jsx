/**
 * Description component
 * @param {Object} props - Props
 * @param {React.ReactNode} props.children - Text
 * @returns {JSX.Element} - Description component
 */
export function Description({ children }) {
  return (
    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-7 mt-4 first:mt-0">
      {children}
    </p>
  )
}
