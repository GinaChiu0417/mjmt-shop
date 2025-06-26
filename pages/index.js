import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Product from '../components/Product'

export default function Home() {
  return (
    <>
      <Head>
        <title>木皆醫療 | 肌力照護 MuscleSense</title>
        <meta name="description" content="智慧肌肉檢測與營養補給品牌 - 木皆醫療 MuJie MedTech" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />

      <main
        className="min-h-screen bg-[#f7f5ef] text-gray-700 dark:bg-gray-900 dark:text-white font-sans relative"
        style={{
          backgroundImage: "url('/physio-2656743_1920.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.95
        }}
      >
        <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80">
          {/* 品牌標語區塊 */}
          <div className="max-w-4xl mx-auto text-center px-6 pt-16">
            <h2
              className="text-5xl md:text-6xl font-bold text-[#008584] mb-6"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              「看見肌肉，就能預防流失。」
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-800 dark:text-gray-300">
              木皆醫療（MuJie MedTech）致力於結合光學成像技術與人工智慧演算法，開發具臨床實用價值的智慧醫療器材。
              秉持「科技取之於社會，應用回饋於社會」的初衷，致力於將技術轉譯為實際臨床價值，
              推動智慧醫療普及，深入各級醫療機構與社區角落，實現精準醫療與全民健康的願景。
            </p>
          </div>

          {/* 產品列表主區塊 */}
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 id="products" className="text-2xl font-semibold mb-6">產品一覽</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/products/mj01" className="block">
                <Product
                  title="可攜式肌檢儀 MJ-01"
                  price="NT$19,800"
                  description={`你真的了解自己的肌肉狀況嗎？\n\n隨著年齡增長、活動量減少，肌少症正悄悄找上你——但你可能還沒發現。\n\nMJ-01 可攜式肌肉檢測儀，運用紅外線成像與AI演算法，無需接觸、即時量測，讓你隨時掌握深層肌肉狀態。不論是復健、健身、銀髮保健或醫療輔助評估，都能提供精準參考。\n\n📌 體積小巧，外出隨身攜帶\n📌 數據直觀，手機/電腦即時呈現\n📌 搭配肌肉營養補給品，完整肌力提升方案\n\n💡「看見肌肉，就能預防流失。」`}
                />
              </Link>
              <Link href="/products/jelly" className="block">
                <Product
                  title="好肌凍 in-Jelly Boost"
                  price="NT$599 / 6入"
                  description={`忙碌一天，還有時間補充營養嗎？\n\n別讓疲憊拖垮你的肌力！肌力果凍 in-Jelly Boost，專為上班族、健身族、銀髮族設計，每條富含 HMB、BCAA、蛋白質、維生素D。\n\n✅ 蘋果風味滑順入口，零負擔\n✅ 小包裝好攜帶，無需冷藏\n✅ 對抗肌少症的日常營養守護者\n\n💡「想補肌力，不一定要靠一大堆罐罐。」`}
                />
              </Link>
              <Link href="/products/night" className="block">
                <Product
                  title="夜修錠 NightTime Restore"
                  price="NT$1,980 / 30入"
                  description={`入睡時，肌肉也需要修復。\n\n許多人白天運動、吃營養，晚上卻忽略了最關鍵的修復黃金時段。NightTime Restore 夜間修復錠結合 HMB、鎂、鋅與GABA，協助肌肉夜間合成、提升睡眠品質。\n\n🌙 幫助放鬆、安心入睡\n💪 睡夢中強化肌肉修復\n📦 單顆包裝，簡單攜帶，方便每日追蹤\n\n💡「你熟睡時，它幫你修復肌肉。」`}
                />
              </Link>
              <Link href="/products/shot" className="block">
                <Product
                  title="肌能條 Muscle Shot Concentrate"
                  price="NT$2,990 / 15入"
                  description={`訓練前後，一條加速你的進化！\n\n高濃度、快吸收的條狀濃縮液，專為運動前後補充肌力營養設計。只需一條，立刻補進HMB、肌酸與胺基酸，全力支援你下一場挑戰。\n\n⚡ 極速吸收、無糖配方\n⚡ 可與運動飲或蛋白飲混合\n⚡ 隨手即飲，動態補給首選\n\n💡「從訓練到修復，條裝就是你的行動補給站。」`}
                />
              </Link>
            </div>

            {/* 聯絡資訊 */}
            <div className="mt-20 text-sm text-gray-600 border-t pt-8 dark:text-gray-300">
              <p>聯絡我們｜電話：0908-938-367　Email：mujiemt2025@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
