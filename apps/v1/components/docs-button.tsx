import Link from "next/link"
import { Bug, Pen } from "lucide-react"

export function DocsEditButton({ path }: { path: string }) {
  return (
    <Link
      href={`https://github.com/octacn/ui/blob/main/content/docs/${path}`}
      target="_blank"
      className="inline-flex items-center text-nowrap gap-1 text-muted-foreground hover:text-foreground cursor-default text-sm"
    >
      <Bug className="size-3" />
      Edit this page
    </Link>
  )
}

export function DocsIssueButton({ path }: { path: string }) {
  return (
    <Link
      href={`https://github.com/octacn/ui/issues/new?title=${encodeURIComponent(`Issue with ${path}`)}`}
      target="_blank"
      className="inline-flex items-center text-nowrap gap-1 text-muted-foreground hover:text-foreground cursor-default text-sm"
    >
      <Pen className="size-3" />
      Report an Issue
    </Link>
  )
}
