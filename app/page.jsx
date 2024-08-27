"use client"

import dynamic from 'next/dynamic'
import s from "./page.module.scss"
import Character from "components/character";
import Scrollvideo from "components/scrollvideo";
import Ball from "components/BallAnimation";
import Footer from "components/footer";
import Velocity from "components/velocity";

import { HorizontalScrollll } from "components/HorizontalScrollll";
import { useRef, useEffect as UseEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from 'lenis';
// import Pic1 from 'public/images/skab-letal.jpg'
// import Pic2 from 'public/images/skab-voj-tu.jpg'
// import Pic3 from 'public/images/skaba.jpg'

const Gallery = dynamic(() => import('/components/parallaxgallery'), {
  ssr: false
})


// const HorizontalScroll = dynamic(() => import('/components/HorizontalScroll'), {
//   ssr: false
// })

const Hero = dynamic(() => import('/components/hero'), {
  ssr: false
})


const paragraph = "Škabrijel is a hill north-east of the town of Nova Gorica. Since they cut down the vegetation on the top and erected a tall metal observation tower, it offers an extremely beautiful view in all directions. We have the Soča river between Solkan and Sabotin like in the palm of our hands. In the north, the Julian Alps and the Carnic Alps can be seen. To the south we can see the Adriatic Sea behind the karst Črni hribi with Trstelj, and to the east the western edge of the Trnovska Plateau. It is also interesting from a historical point of view, fierce battles took place there during the First World War. It got its name from the church of Saint Gabriel that stood on it before the First World War."


export default function page() {

  // const firstText = useRef(null);
  // const secondText = useRef(null);
  // const slider = useRef(null);
  // let xPercent = 0;
  // let direction = -1;

  // const container = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end end"]
  // })

  UseEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(slider.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       scrub: 0.25,
  //       start: 0,
  //       end: window.innerHeight,
  //       onUpdate: e => direction = e.direction * -1
  //     },
  //     x: "2000px",
  //   })
  //   requestAnimationFrame(animate);
  // }, [])

  // const animate = () => {
  //   if (xPercent < -160) {
  //     xPercent = 0;
  //   }
  //   else if (xPercent > 0) {
  //     xPercent = -160;
  //   }
  //   gsap.set(firstText.current, { xPercent: xPercent })
  //   gsap.set(secondText.current, { xPercent: xPercent })
  //   requestAnimationFrame(animate);
  //   xPercent += 0.11 * direction;
  // }


  return (
    <>
      <div className={s.hero}>
        {/* <Hero /> */}
      </div >
      <Gallery />
      <div >
        <Velocity />
        <div style={{ height: "50vh" }}></div>
      </div >
      <div >
        {/* <div ref={slider} className=" font-semibold uppercase text-neutral-500  text-7xl font-serif text-slate-300 mx-16 text-[#2d2d2d]"> */}
        {/* <p ref={firstText}>ŠKABRIJEL 646 METRES HILL IN NOVA GORICA.</p> */}

        {/* <p ref={secondText}> Škabrijel 646 metres hill in Nova Gorica.</p> */}
      </div>
      <div>

      </div>
      {/* </div>  */}



      {/* <Paragraph value={paragraph}/> */}
      {/* <Word value={paragraph} /> */}
      <Character value={paragraph} />


      <div style={{ height: "45vh" }}></div>
      {/* <HorizontalScroll /> */}
      {/* <div style={{ height: "5vh" }}></div> */}
      {/* <HorizontalScrollll /> */}
      <div style={{ height: "100vh" }}></div>
      {/* <HorizontalScrolll /> */}
      {/* <div style={{ height: "20vh" }}></div> */}
      <div>
        {/* <Scrollvideo /> */}
        {/* <Ball /> */}

      </div>
      <Footer />
      {/* <main ref={container} className="relative h-[400vh]">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <Section3 scrollYProgress={scrollYProgress} />
      </main> */}
    </>
  )

}

// const Section1 = ({ scrollYProgress }) => {

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
//   return (
//     <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
//       <p>Scroll Perspective</p>
//       <div className="flex gap-4">
//         <p>Section</p>
//         <div className="relative w-[12.5vw]">
//           <Image
//             src={Pic1}
//             alt="img"
//             placeholder="blur"
//             fill
//           />
//         </div>
//         <p>Transition</p>
//       </div>
//     </motion.div>
//   )
// }

// const Section2 = ({ scrollYProgress }) => {

//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

//   return (
//     <>
//       <motion.div style={{ scale, rotate }} className="relative h-screen">
//         <Image
//           src={Pic2}
//           alt="img"
//           placeholder="blur"
//           fill
//         />
//       </motion.div>

//     </>
//   )
// }

// const Section3 = ({ scrollYProgress }) => {

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

//   return (
//     <motion.div style={{ scale, rotate }} className="relative h-screen">
//       <Image
//         src={Pic3}
//         alt="img"
//         placeholder="blur"
//         fill
//       />
//     </motion.div>
//   )
// }