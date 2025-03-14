import Image from 'next/image'
import React from 'react'
import srmlogo from "@/public/srmlogo.webp"
import texuslogo from "@/public/texuslogo.png"
import cybertracslogo from '@/public/cybertracslogo.png'

const Cybertracs = () => {
  return (
    <section id="cybertracs" className="text-center text-white py-20">
  <h2 className="text-6xl font-bold mb-8">About Cybertracs</h2>
  <div className="flex justify-center mb-8">
    <a href="https://cybertracs.in/" target="_blank" rel="noopener noreferrer">
      <div className="bg-white rounded-full px-5 py-2">
        <Image src={cybertracslogo} alt="Cybertracs Logo" width={250} />
      </div>
    </a>
  </div>

  <p className="text-gray-300 max-w-7xl mx-auto text-2xl text-justify">
  Cybertracs Technologies & Research Private Limited, founded in 2019, is a trusted Indian startup specialising in Advisory Services in the Field of Information Technology and Cyber Security. Our expert team addresses the challenges in Information Technology Systems and Cyber Security Management, combining cutting-edge technology, training, research, and compliance with both Indian and international standards. With deep expertise in Networking, ISO 27001, and legal compliance, we provide tailored solutions to safeguard your business.
We are a MSME & DIPP Approved Startup, committed to delivering top-tier security solutions for the evolving cyber landscape.
</p>
</section>

  )
}

export default Cybertracs