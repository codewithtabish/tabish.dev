'use client';

import HelpContentComp from "@/components/generals/help/help-comp";


// Dynamic SEO metadata for Help page (Next.js 15: params is a Promise)
// export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
//   const { locale } = await params;
//   const safeLocale = (allowedLocales.includes(locale as LocaleType) ? locale : "en") as LocaleType;
//   return getHelpMetadata(safeLocale);
// }

export default  function HelpPage({
  
}: {
}) {


  return (
    <main className="
      w-full min-h-screen
      max-w-[100vw]
      lg:max-w-screen-lg
      xl:max-w-screen-xl
      2xl:max-w-screen-2xl
      mx-auto
      px-2
      sm:px-4
      md:px-8
      lg:px-10
      xl:px-12
      2xl:px-16
      py-6
      flex flex-col gap-10
      bg-background
      overflow-x-hidden
    ">
      {/* <BackButton /> */}
      <HelpContentComp  />
      {/* <HelpChatComp /> */}
    </main>
  );
}
