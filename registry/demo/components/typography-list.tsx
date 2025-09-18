import { LI, UL } from "@/registry/ui/typography";

export default function TypographyList() {
  return (
    <UL className="my-6 ml-6 list-disc [&>li]:mt-2">
      <LI>1st level of puns: 5 gold coins</LI>
      <LI>2nd level of jokes: 10 gold coins</LI>
      <LI>3rd level of one-liners : 20 gold coins</LI>
    </UL>
  );
}
