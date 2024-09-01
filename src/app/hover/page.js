"use client";
import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import Image from "next/image";
import styles from "../page.module.css";
import Link from 'next/link';

export default function Hover() {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.classList.add('language-css'); // Añade la clase solo en el cliente
      Prism.highlightElement(codeRef.current); // Resalta el código
    }
  }, []);

  return (
    <main className="hover-container">
      <h1>Hover Page</h1>
      
      <div className="hover-1">
        <h1>Hover Effect on Siblings</h1>

        <div className="container">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>

        <div className="code">
          <pre>
            <code ref={codeRef}>
        {`.box { 
  transition: opacity 0.6s ease;
}

.container:hover > :not(:hover) {
  opacity: 0.4;
}
    `}
            </code>
          </pre>
        </div>
      </div>
    </main>
  );
}
