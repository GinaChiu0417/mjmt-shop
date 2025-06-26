import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo 圖片連結 */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"  // 確保檔名正確
            alt="mjmt logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* 導覽連結 */}
        <div className="space-x-4">
          <Link href="/" className="text-gray-900 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">首頁</Link>
          <Link href="/#products" className="text-gray-900 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">產品</Link>
          <Link href="/about" className="text-gray-900 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">關於我們</Link>
          <Link href="/contact" className="text-gray-900 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">聯絡我們</Link>
        </div>
      </div>
    </nav>
  )
}
