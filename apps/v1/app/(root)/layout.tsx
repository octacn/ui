import * as React from "react"

import IssueButton from "@/components/issue-button"
import { SiteHeader } from "@/components/site-header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <IssueButton />
      <SiteHeader />
      {children}
    </>
  )
}
