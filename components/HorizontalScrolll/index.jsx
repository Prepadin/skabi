'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'
import ska from 'public/images/skabrijel-old.jpg'
import tour from 'public/images/voj-skab.jpg'
import poh from 'public/images/skaba.jpg'
import hri from 'public/images/skab-hri.jpg'
import leta from 'public/images/skab-letal.jpg'
import voj from 'public/images/skab-voj-tu.jpg'

const HorizontalScrolll = () => {
    return (
        <div className="bg-neutral-800">
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500 text-5xl">
                    <h1>  history </h1>
                </span>
            </div>
            <HorizontalScrollCarousel />
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Scroll up
                </span>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-90%"]);
    const scale = useTransform(scrollYProgress, [1, 0], [0.5, 1]);
    const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    // return (
    //     <main ref={targetRef} className="relative h-[300vh] bg-neutral-900">
    //         <Section1 scrollYProgress={scrollYProgress} />
    //         {/* <Section2 scrollYProgress={scrollYProgress} /> */}
    //     </main>
    // );


    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">

            <div className="sticky top-0 flex h-screen w-[1550px] items-center overflow-hidden">




                <motion.div

                    // style={{ scale }}
                    className="flex h-screen w-[1550px] bg-neutral-200 overflow-hidden ">
                    <div className="uppercase text-xl">Eat my balls</div>
                    <Image src={ska} />
                </motion.div >
                <motion.div style={{ x }} className="flex group relative h-screen w-[1550px] overflow-hidden bg-neutral-200">
                    <div>go go  now</div>
                    <Image src={tour} />
                </motion.div>
                <motion.div style={{ x }} className="group relative h-screen w-[1550px] overflow-hidden bg-neutral-200">
                    <div>Eat my balls</div>
                    <Image src={poh} />

                </motion.div>




                {/* <motion.div style={{ x, scale }} className="flex gap-4">
                    <div className="group relative h-screen w-[1550px] overflow-hidden bg-neutral-200">
                        <div>Good morning</div>

                    </div>
                </motion.div> */}

            </div>
        </section>


    );
};



const Bard = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-screen w-[1550px] overflow-hidden bg-neutral-200"
        >
            <div
            // style={{
            //     backgroundImage: `url(${card.url})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }}

            ></div>
            <div >
                <p >
                    {/* {card.title} */}
                </p>
            </div>
        </div>
    );
};

export { HorizontalScrolll }

// const cards = [
//     {
//         url: "/imgs/abstract/1.jpg",
//         title: "Title 1",
//         id: 1,
//     },
//     {
//         url: "/imgs/abstract/2.jpg",
//         title: "Title 2",
//         id: 2,
//     },
//     {
//         url: "/imgs/abstract/3.jpg",
//         title: "Title 3",
//         id: 3,
//     },
//     {
//         url: "/imgs/abstract/4.jpg",
//         title: "Title 4",
//         id: 4,
//     },

// ];