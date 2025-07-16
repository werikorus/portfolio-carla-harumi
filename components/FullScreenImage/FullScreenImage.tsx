// app/components/FullScreenImage.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function FullScreenImage({
  src,
  alt,
}: {
  src: string;
  alt?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Imagem clicável */}
      <div
        className="cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt || "Imagem"}
          objectFit="cover"
          className="rounded shadow object-cover"
          width={500}
          height={500}
        />
      </div>

      {/* Modal fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full h-full max-w-6xl max-h-screen p-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={alt || "Imagem em fullscreen"}
                layout="fill"
                objectFit="contain"
                className="cursor-zoom-out"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
