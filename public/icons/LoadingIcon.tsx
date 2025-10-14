"use client";

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useRef } from "react"

export default function LoadingIcon() {
  const conRef = useRef(null);

  useGSAP(() => {
    gsap.to(conRef.current, {
      rotate: 360,
      repeat: -1,
      duration: .8,
      ease: "none"
    })
  }, {scope: conRef, dependencies: [conRef]})

  return (
    <svg ref={conRef} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5V7.8M12 16.2V19M7.8 12H5M19 12H16.2M16.9549 16.9549L14.975 14.975M16.9549 7.09996L14.975 9.07986M7.0451 16.9549L9.025 14.975M7.0451 7.09996L9.025 9.07986" stroke="url(#paint0_linear_64_410)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_64_410" x1="7" y1="6.5" x2="17" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#A2A2A2" />
        </linearGradient>
      </defs>
    </svg>
  )
}