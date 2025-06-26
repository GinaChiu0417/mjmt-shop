import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Mail, Phone } from 'lucide-react' // 需要 lucide-react 圖示套件

export default function Contact() {
  return (
    <>
      <Head>
        <title>聯絡我們｜木皆醫療</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-[#f7f5ef] text-gray-900 font-sans flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md text-center border border-gray-200">
          <h1 className="text-3xl font-bold text-[#008584] mb-4">聯絡我們</h1>
          <hr className="mb-6 border-t border-gray-300" />

          <div className="flex items-center justify-center gap-3 mb-4">
            <Phone className="w-5 h-5 text-[#008584]" />
            <p className="text-lg">0908-938-367</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Mail className="w-5 h-5 text-[#008584]" />
            <p className="text-lg">mujiemt2025@gmail.com</p>
          </div>
        </div>
      </main>
    </>
  )
}
