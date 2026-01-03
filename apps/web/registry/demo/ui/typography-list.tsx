import { Li, Ul } from "@/registry/ui/typography"

export default function TypographyList() {
  return (
    <Ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <Li>1st level of puns: 5 gold coins</Li>
      <Li>2nd level of jokes: 10 gold coins</Li>
      <Li>3rd level of one-liners : 20 gold coins</Li>
    </Ul>
  )
}
