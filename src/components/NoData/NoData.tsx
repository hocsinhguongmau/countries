import { GoAlert } from 'react-icons/go'

type Props = {
  message: string
}

export default function NoData({ message }: Props) {
  return (
    <div className="mt-4 rounded border-error border text-error px-8 py-4 inline-flex gap-2 items-center font-bold">
      <GoAlert className="text-2xl -mt-1" />
      {message}
    </div>
  )
}
