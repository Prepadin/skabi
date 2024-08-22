'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'
import ska from 'public/images/skabrijel-old.jpg'
import tour from 'public/images/voj-skab.jpg'
import poh from 'public/images/skaba.jpg'
import hri from 'public/images/skab-hri.jpg'
import leta from 'public/images/skab-letal2.jpg'
import voj from 'public/images/skab-voj-tu.jpg'

const HorizontalScrollll = () => {
    return (
        <div className="bg-neutral-800">
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500  text-9xl font-serif text-slate-300">
                    <h1>  history </h1>
                </span>
            </div>
            <HorizontalScrollCarousel />
            <div className="flex h-48 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">

                </span>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-87%"]);
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
            <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
                <motion.div style={{ x }} className="flex">
                    <motion.div

                        // style={{ scale }}
                        className="group relative h-[60vh]  w-[1050px] overflow-hidden bg-neutral-200 mx-32 mt-64  bg-neutral-900">

                        <h2 className="text-8xl font-serif text-slate-300 leading-relaxed">First world war battlefield in 1917 on Škabrijel </h2>

                    </motion.div>

                    <motion.div

                        // style={{ scale }}
                        className="group relative h-[80vh]  w-[1150px] overflow-hidden bg-neutral-200 mx-32 my-48">
                        {/* <div className="uppercase text-xl">Eat my balls</div> */}
                        <Image src={ska} fill={true} />

                    </motion.div>
                    <motion.div className="group relative  h-[80vh]  w-[1150px] overflow-hidden bg-neutral-200 mx-32 my-48">
                        {/* <div>go go  now</div> */}
                        <Image src={tour} fill={true} />

                    </motion.div>
                    <motion.div className="group relative h-[80vh] w-[1150px]  overflow-hidden bg-neutral-200 mx-32 my-48">
                        {/* <div>Eat my balls</div> */}
                        <Image src={poh} fill={true} />

                    </motion.div>
                    <motion.div className="group relative h-[80vh] w-[1150px]  overflow-hidden bg-neutral-200 mx-32 my-48 ">
                        {/* <div>Eat my balls</div> */}
                        <Image src={hri} fill={true} />
                    </motion.div>
                    <motion.div className="group relative h-[80vh] w-[1150px]  overflow-hidden bg-neutral-200 mx-32 my-48">
                        {/* <div className="uppercase text-xl">Eat my balls</div> */}
                        <Image src={leta} fill={true} />
                    </motion.div>
                    <motion.div className="group relative h-[80vh] w-[1150px]  overflow-hidden bg-neutral-200 mx-32 my-48">
                        {/* <div>Suck my dick</div> */}
                        <Image src={voj} fill={true} />
                    </motion.div>
                    <motion.div

                        // style={{ scale }}
                        className="group relative h-[80vh]  w-[1350px] overflow-hidden bg-neutral-200 mx-32 mt-64  bg-neutral-900">

                        <h2 className="text-5xl font-serif text-slate-300">During the First World War it was a stronghold of the Austro-Hungarian Army. The hill was fought over in the Eleventh Battle of the Isonzo. During the battle, the top of Škabrijel Hill was lost and recaptured nine times by the Austro-Hungarians. One officer described the fighting, stating: "Around 6 o'clock in the morning, the Italians attacked for the first time, and then it went all day. But we always repulsed them with hand grenades, machine guns tried to take the trenches. I was on the left wing with six other men, strong and fearless. They went forward when they attacked, even the second time they persisted even though they were wounded and one dead. We held out and repulsed them with hand grenades." Due to artillery bombardment by the Italian Army during the First World War, the hill—now densely wooded—was left almost entirely bare. </h2>

                    </motion.div>
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

// const Section1 = ({ scrollYProgress }) => {

//     const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//     const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
//     return (
//         <motion.div style={{ x }} className="flex gap-4">
//             <div className="group relative h-screen w-[450px] overflow-hidden bg-neutral-200">
//                 <div>Eat my balls</div>

//             </div>
//             <div className="group relative h-screen w-[450px] overflow-hidden bg-neutral-200">
//                 <div>Good morning</div>

//             </div>
//             <div className="group relative h-screen w-[450px] overflow-hidden bg-neutral-200">
//                 <div>Good morning</div>

//             </div>
//             <div className="group relative h-screen w-[450px] overflow-hidden bg-neutral-200">
//                 <div>Good morning</div>

//             </div>
//             <div className="group relative h-screen w-[450px] overflow-hidden bg-neutral-200">
//                 <div>Good morning</div>

//             </div>
//             <div className="group relative h-screen w-[450px] overflow-hidden bg-neutral-200">
//                 <div>Good morning</div>

//             </div>

//         </motion.div>

//     )
// };

// const Section2 = ({ scrollYProgress }) => {

//     const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//     const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
//     return (
//         <motion.div style={{ x, scale }} className="flex gap-4">
//             <div className="group relative h-screen w-[1550px] overflow-hidden bg-neutral-200">
//                 <div>Good morning</div>

//             </div>
//         </motion.div>
//     )
// };

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

export { HorizontalScrollll }

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