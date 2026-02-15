import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style = {{ padding: "20px", fontFamily: "Arial" }}>
      <p>Selamat datang di website saya</p>

       <Link href="/about">
        <button style={{
          marginTop: "10px",
          padding: "8px 12px",
          cursor: "pointer"
        }}> Lanjut ke Halaman About
           </button>
           </Link>
    </div>
  )
}

    // <div>
    // <h1>Praktikum Next.js Pages Router</h1> <br /> 
    //   <p>Mahasiswa D4 Pengembangan web</p>
    // </div>