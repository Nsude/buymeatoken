"use client"

import { useRef, useState } from "react";
import CopyIcon from "../../public/icons/CopyIcon";
import gsap from "gsap";
import CopiedIcon from "../../public/icons/CopiedIcon";

interface Props {
  valueToCopy: string;
}

export default function CopyButton({ valueToCopy }: Props) {
  const [copied, setCopied] = useState(false);
  const btnRef = useRef(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const handleCopyValue = () => {
    // GSAP animation sequence
    const tl = gsap.timeline({
      onComplete: () => {
        setCopied(true);
        // Wait a tick before scaling up again
        gsap.to(btnRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      },
    });

    // Step 1: scale down
    tl.to(btnRef.current, {
      scale: 0.85,
      duration: 0.15,
      ease: "power2.in",
    });

    // Step 2: wait a little before toggling
    tl.add(() => setCopied(true));

    // Reset after 3s
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 3000);

    // copy value
    navigator.clipboard.writeText(valueToCopy)
      .then(() => { /* display toast notification */ });
  }

  return (
    <button ref={btnRef} onClick={handleCopyValue}>
      {copied ? <CopiedIcon /> : <CopyIcon />}
    </button>
  )
}