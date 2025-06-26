import Head from 'next/head'
import Navbar from '../../components/Navbar'

export default function JellyPage() {
  return (
    <>
      <Head>
        <title>好肌凍 in-Jelly Boost | 木皆醫療</title>
        <meta name="description" content="了解好肌凍 in-Jelly Boost 的詳細資訊" />
      </Head>

      <Navbar />

      <main
        className="min-h-screen text-white font-sans relative"
        style={{
          backgroundImage: "url('/products/jelly-bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="bg-[#1f2937]/80 backdrop-blur-sm text-white min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 w-full max-w-[1280px] mx-auto">

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/products/jelly-pack.png"
                alt="果凍產品圖"
                className="w-[300px] md:w-[400px] object-contain"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#008584] mb-4">
                好肌凍 in-Jelly Boost
              </h1>
              <p className="text-xl font-semibold mb-6">NT$599 / 6入</p>
              <p className="leading-relaxed text-lg whitespace-pre-line">
{`忙碌一天，還有時間補充營養嗎？

別讓疲憊拖垮你的肌力！
好肌凍 in-Jelly Boost，專為上班族、健身族、銀髮族設計，
每條富含 HMB、BCAA、蛋白質、維生素 D。

✅ 蘋果風味滑順入口，零負擔
✅ 小包裝好攜帶，無需冷藏
✅ 對抗肌少症的日常營養守護者

💡「想補肌力，不一定要靠一大堆罐罐。」`}
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
