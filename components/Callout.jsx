import { InformationCircleIcon } from 'nextra/icons'

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: <InformationCircleIcon />,
  warning: '⚠️',
}

const classes = {
  default:
    'border-orange-100 bg-orange-50 text-orange-800 dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300',
  error:
    'border-red-200 bg-red-100 text-red-900 dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200',
  info: 'border-blue-200 bg-blue-100 text-blue-900 dark:border-blue-200/30 dark:bg-blue-900/30 dark:text-blue-200',
  warning:
    'border-yellow-100 bg-yellow-50 text-yellow-900 dark:border-yellow-200/30 dark:bg-yellow-700/30 dark:text-yellow-200',
}

/**
 * Description component
 * @param {Object} props - Props
 * @param {string} props.text - Description of the model
 * @returns {JSX.Element} - Description component
 */
export function Callout({
  children,
  type = 'default',
  emoji = TypeToEmoji[type],
}) {
  return (
    <div
      className={`overflow-x-auto mt-6 flex rounded-lg border py-2 pr-4 items-center ${classes[type]}`}
    >
      <div className="select-none text-xl pl-3 pr-2">{emoji}</div>
      <div className="w-full min-w-0 leading-7 [&>p]:!text-inherit">
        {children}
      </div>
    </div>
  )
}
