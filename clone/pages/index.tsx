import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Sidebar from '@/components/Sidebar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Sidebar></Sidebar>
      {/* Feed */}
      {/* Widgets */}
      <h1 className="text-3xl font-bold underline">hello</h1>
    </main>
  )
}
