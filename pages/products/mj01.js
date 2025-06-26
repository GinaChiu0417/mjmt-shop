import Head from 'next/head'
import Navbar from '../../components/Navbar'

export default function MJPage() {
  return (
    <>
      <Head>
        <title>可攜式肌檢儀 MJ-01 | 木皆醫療</title>
        <meta name="description" content="了解可攜式肌檢儀 MJ-01 的詳細資訊" />
      </Head>

      <Navbar />

      <main
        className="min-h-screen bg-[#f7f5ef] text-gray-900 dark:bg-gray-900 dark:text-white font-sans relative"
        style={{
          backgroundImage: "url('/products/pexels-pixabay-33786.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="bg-[#1f2937]/80 backdrop-blur-sm text-white min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 w-full max-w-[1280px] mx-auto">

            {/* 左圖：產品圖 */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/products/mj-device.png"
                alt="肌檢儀產品圖"
                className="w-[300px] md:w-[400px] object-contain"
              />
            </div>

            {/* 右文：介紹段落 */}
            <div className="w-full md:w-1/2 text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#008584] mb-4">
                可攜式肌檢儀 MJ-01
              </h1>

              <p className="leading-relaxed text-lg whitespace-pre-line">
{`你真的了解自己的肌肉狀況嗎？

隨著年齡增長、活動量減少，肌少症正悄悄找上你——但你可能還沒發現。

MJ-01 可攜式肌肉檢測儀，運用紅外線成像與AI演算法，無需接觸、即時量測，讓你隨時掌握深層肌肉狀態。不論是復健、健身、銀髮保健或醫療輔助評估，都能提供精準參考。

📌 體積小巧，外出隨身攜帶
📌 數據直觀，手機/電腦即時呈現
📌 搭配肌肉營養補給品，完整肌力提升方案

💡「看見肌肉，就能預防流失。」`}
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
