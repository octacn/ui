
// export const revalidate = false;
// export const dynamic = "force-static";
// export const dynamicParams = false;

// export function generateStaticParams() {
//   return docsSource.generateParams();
// }

// export async function generateMetadata(props: PageProps) {
//   const params = await props.params;
//   const page = docsSource.getPage(params.slug);

//   if (!page) {
//     notFound();
//   }

//   const doc = page.data;

//   if (!doc.title || !doc.description) {
//     notFound();
//   }

//   return {
//     title: doc.title,
//     description: doc.description,
//     metadataBase: new URL("https://yourdomain.com"), // TODO:- Change it after
//     openGraph: {
//       title: doc.title,
//       description: doc.description,
//       type: "article",
//       url: absoluteUrl(page.url),
//       images: [
//         {
//           url: `/og?title=${encodeURIComponent(
//             doc.title
//           )}&description=${encodeURIComponent(doc.description)}`,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: doc.title,
//       description: doc.description,
//       images: [
//         {
//           url: `/og?title=${encodeURIComponent(
//             doc.title
//           )}&description=${encodeURIComponent(doc.description)}`,
//         },
//       ],
//       creator: "@",
//     },
//   };
// }