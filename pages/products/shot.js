import Head from 'next/head'
import Navbar from '../../components/Navbar'

export default function Shot() {
  return (
    <>
      <Head>
        <title>肌能條 Muscle Shot Concentrate | 木皆醫療</title>
        <meta name="description" content="了解肌能條 Muscle Shot 的詳細資訊" />
      </Head>

      <Navbar />

      <main
        className="min-h-screen bg-[#f7f5ef] text-gray-900 dark:bg-gray-900 dark:text-white font-sans relative"
        style={{
          backgroundImage: "url('/products/shot-bg.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* 深藍透明遮罩＋置中排版 */}
        <div className="bg-[#1f2937]/80 backdrop-blur-sm text-white min-h-screen flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 w-full max-w-[1280px] mx-auto">
            
            {/* 左圖：產品圖 */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/products/shot-pack.png"
                alt="肌能條產品圖"
                className="w-[300px] md:w-[400px] object-contain"
              />
            </div>

            {/* 右文：文字區塊 */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#008584] mb-4">
                肌能條 Muscle Shot Concentrate
              </h1>
              <p className="text-xl font-semibold mb-6">NT$2,990 / 15入</p>
              <p className="leading-relaxed text-lg whitespace-pre-line">
                {`訓練前後，一條加速你的進化！

高濃度、快吸收的條狀濃縮液，專為運動前後補充肌力營養設計。
只需一條，立刻補進 HMB、肌酸與胺基酸，全力支援你下一場挑戰。

⚡ 極速吸收、無糖配方
⚡ 可與運動飲或蛋白飲混合
⚡ 隨手即飲，動態補給首選

💡「從訓練到修復，條裝就是你的行動補給站。」`}
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
