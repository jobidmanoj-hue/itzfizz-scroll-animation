"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const carRef = useRef(null);
  const greenRef = useRef(null);
  const headlineRef = useRef(null);
  const topCardsRef = useRef(null);
  const bottomCardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
        },
      });

const car = carRef.current;
const carWidth = car.offsetWidth;
const screenWidth = window.innerWidth;

tl.fromTo(
  car,
  { x: -carWidth * 1.2 },
  { x: screenWidth * 0.9 },
  0
);
      // 🟢 Green expands only in strip
      tl.fromTo(
        greenRef.current,
        { width: "0%" },
        { width: "65%", ease: "none" },
        0
      );

      // 📝 Headline appears after car moves a bit
      tl.fromTo(
        headlineRef.current,
        { opacity: 0 },
        { opacity: 1 },
        0.4
      );

      // 🔝 Top cards
      tl.fromTo(
        topCardsRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0 },
        0.8
      );

      // 🔽 Bottom cards
      tl.fromTo(
        bottomCardsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0 },
        1.3
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gray-200 flex items-center justify-center overflow-hidden"
    >
      {/* TOP CARDS */}
      <div
        ref={topCardsRef}
        className="absolute top-12 right-20 flex gap-6 opacity-0"
      >
        <div className="bg-lime-400 p-8 rounded-xl">
          <h2 className="text-5xl font-bold">58%</h2>
          <p>Increase in pick up point use</p>
        </div>

        <div className="bg-gray-800 text-white p-8 rounded-xl">
          <h2 className="text-5xl font-bold">27%</h2>
          <p>Increase in pick up point use</p>
        </div>
      </div>

      {/* MIDDLE STRIP */}
      <div className="relative w-full h-[180px] flex items-center overflow-hidden">
        {/* Black Base */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Green Expanding */}
        <div
          ref={greenRef}
          className="absolute left-0 top-0 h-full bg-green-500"
          style={{ width: "0%" }}
        ></div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="relative z-10 text-7xl font-bold tracking-[1rem] pl-20 opacity-0"
        >
          WELCOME ITZFIZZ
        </h1>

        {/* Car */}
        <img
          ref={carRef}
          src="/car.png"
          alt="Car"
className="absolute w-[500px] z-20 top-1/2 -translate-y-1/2"        />
      </div>

      {/* BOTTOM CARDS */}
      <div
        ref={bottomCardsRef}
        className="absolute bottom-16 flex gap-10 opacity-0"
      >
        <div className="bg-blue-400 p-8 rounded-xl">
          <h2 className="text-5xl font-bold">23%</h2>
          <p>Decreased in customer phone calls</p>
        </div>

        <div className="bg-orange-500 p-8 rounded-xl">
          <h2 className="text-5xl font-bold">40%</h2>
          <p>Decreased in customer phone calls</p>
        </div>
      </div>
    </section>
  );
}