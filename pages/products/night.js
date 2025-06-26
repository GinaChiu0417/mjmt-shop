import Head from 'next/head'
import Navbar from '../../components/Navbar'

export default function NightPage() {
  return (
    <>
      <Head>
        <title>夜修錠 NightTime Restore | 木皆醫療</title>
        <meta name="description" content="了解 NightTime Restore 夜修錠的詳細資訊" />
      </Head>

      <Navbar />

      <main
        className="min-h-screen bg-[#f7f5ef] text-gray-900 dark:bg-gray-900 dark:text-white font-sans relative"
        style={{
          backgroundImage: "url('/pexels-n-voitkevich-7615614.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* 透明深藍區塊 + 置中排版 */}
        <div className="bg-[#1f2937]/80 backdrop-blur-sm text-white min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 w-full max-w-[1280px] mx-auto">
            
            {/* 左圖：產品圖 */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/products/night-pack.png"
                alt="夜修錠產品圖"
                className="w-[300px] md:w-[400px] object-contain"
              />
            </div>

            {/* 右文：文字介紹 */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#008584] mb-4">
                夜修錠 NightTime Restore
              </h1>
              <p className="text-xl font-semibold mb-6">NT$1,980 / 30入</p>
              <p className="leading-relaxed text-lg whitespace-pre-line">
{`入睡時，肌肉也需要修復。

許多人白天運動、吃營養，晚上卻忽略了最關鍵的修復黃金時段。
NightTime Restore 夜間修復錠結合 HMB、鎂、鋅與 GABA，協助肌肉夜間合成、提升睡眠品質。

🌙 幫助放鬆、安心入睡
💪 睡夢中強化肌肉修復
📦 單顆包裝，簡單攜帶，方便每日追蹤

💡「你熟睡時，它幫你修復肌肉。」`}
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
