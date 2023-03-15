/**
 * Description component
 * @param {Object} props - Props
 * @param {string} props.text - Description of the model
 * @returns {JSX.Element} - Description component
 */
export function Description({ text }) {
  return (
    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-7 mt-2">
      {text}
    </p>
  )
}
