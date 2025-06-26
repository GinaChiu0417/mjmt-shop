import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>關於我們 | 木皆醫療 MuJie MedTech</title>
        <meta name="description" content="木皆醫療致力於打造智慧醫材與營養補充解方，促進全民健康。" />
      </Head>

      <Navbar />

      <main
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-white font-sans"
        style={{
          backgroundImage: "url('/about-bg.jpg')",
        }}
      >
        <div className="min-h-screen backdrop-blur-sm bg-gray-900/80 flex flex-col items-center justify-center px-6 py-12 text-center">
          <p className="italic text-[#008584] text-2xl md:text-3xl font-semibold tracking-wide drop-shadow mb-6">
            「看見肌肉，就能預防流失。」
          </p>

          <div className="max-w-4xl space-y-6 text-base leading-relaxed text-white drop-shadow-md">
            <p>
              木皆醫療（MuJie MedTech）成立於西元2024年，在醫療器材產業中提供多元新穎的服務模式，秉持多角化發展，開發臨床實用價值的智慧醫療器材，致力於將技術轉譯為實際臨床價值。
            </p>
            <p>
              草創階段，木皆醫療打造智慧肌肉檢測與營養補充解決方案，為年紀自然老化、行動不便長久臥床乃至辦公室久坐族群提供「肌少症」帶來的潛在威脅解方，透過補充營養與即時檢測密切關注自身狀態，從根本解決肌力不足的問題。
            </p>
            <p>
              木皆醫療重視社會中各層面的需求，秉持「科技取之於社會、應用回饋於社會」的初衷，推動智慧醫療普及，深入各級醫療機構與社區角落，實現精準醫療與全民健康的願景。
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
