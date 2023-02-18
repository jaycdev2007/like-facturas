import Link from "next/link"
export function ButtonLink(props:any) {
  return (
    <Link href={props.url} className="bg-blue-700 py-2 px-4 hover:bg-black-700 transition-500 rounded-lg text-center">
      {props.text}
    </Link>
  )
}