'use client'

import React, { useRef, useEffect } from 'react';
import styles from "./home.module.scss";
import { useScroll, motion, useTransform, Variants, useSpring, useMotionValueEvent, useInView } from 'framer-motion';
import Pic3 from 'public/images/tower.JPG'
import Pic4 from 'public/images/soca.jpg'
import Pic5 from 'public/images/sea.jpg'
import Image from "next/image";

export default function Paragraph({ value }) {

    const ref = useRef(null);
    const ref1 = useRef(null);
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.4', 'start -1']
    })

    // const isInView = useInView(ref1, {
    //     amount: "all",
    // })
    // const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change",
        (latest) => {
            console.log(latest)
        }
    )

    // useEffect(() => {
    //     console.log(`The element ${isInView ? "is" : "is NOT"} in view`)
    // }, [isInView])



    // const { scrollYProgress: scrollYProgressTarget1 } = useScroll({
    //     target: element,
    //     offset: ["start 0.4", "start -1"]
    // });
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 150,
    //     damping: 180,
    //     restDelta: 0.5
    // });

    const words = value.split(" ");

    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

    // const { scrollYProgress } = useScroll()

    // const x = useTransform(scrollYProgress, [0, 0.1], ["-540px", "80px"]);
    const sm = useTransform(scrollYProgress, [0, 0.1], ["-640px", "30px"]);
    const rc = useTransform(scrollYProgress, [0, 0.1], ["-640px", "30px"]);
    const scale1 = useTransform(scrollYProgress, [0.01, 0.2], [0, 1]);
    const scale2 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
    const scale3 = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
    const opacity1 = useTransform(scrollYProgress, [0.5, 0.2], [-0.8, 1.4]);
    const opacity2 = useTransform(scrollYProgress, [0.6, 0.3], [-0.1, 4]);
    const opacity3 = useTransform(scrollYProgress, [0.9, 0.3], [-0.1, 4]);
    const rr = useTransform(scrollYProgress, [0.5, 0.2], [-0.8, 1.4]);
    // const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

    const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const { scrollYProgress: scrollYProgressTarget3 } = useScroll({
        target: ref1,
        offset: ["center", "center"],
    });




    return (
        <>
            <div className={styles.para}>

                <div className={styles.grid}>
                    <motion.div
                        // onViewportEnter={() => console.log("Enter!")}
                        // onViewportLeave={() => console.log("Exit!")}
                        className={styles.images}
                        style={{
                            scale: scale1,
                            x: "10%",
                            y: "-10%",
                            opacity: opacity1,
                        }}
                    >
                        <Image
                            src={Pic3}
                            width={500}
                            height={500}
                        />

                    </motion.div>
                    <motion.div
                        // onViewportEnter={() => console.log("Enter!")}
                        // onViewportLeave={() => console.log("Exit!")}
                        className={styles.images}
                        style={{
                            scale: scale2,
                            x: "10%",
                            y: "-40%",
                            opacity: opacity2,
                        }}
                    >
                        <Image
                            src={Pic4}
                            width={500}
                            height={500}
                        />

                    </motion.div>
                    <motion.div
                        // onViewportEnter={() => console.log("Enter!")}
                        // onViewportLeave={() => console.log("Exit!")}
                        className={styles.images}
                        style={{
                            scale: scale3,
                            x: "10%",
                            y: "-80%",
                            opacity: opacity3,
                        }}
                    >
                        <Image
                            src={Pic5}
                            width={500}
                            height={500}
                        />

                    </motion.div>
                    {/* <motion.div ref={ref} className={styles.images1}
                        // style={{ x: rc }}
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{
                            margin: "70%",
                        }}


                    >
                        <Image
                            src={Pic4}
                            width={500}
                            height={500}
                        />

                    </motion.div> */}
                    {/* <motion.div style={{ scale, opacity }} className={styles.images1}>
                    <Image
                        src={Pic4}
                        width={500}
                        height={500}
                    />
                </motion.div> */}
                </div>
                <p
                    className={styles.paragraph}
                    ref={element}
                    style={{ opacity: scrollYProgress }}
                >
                    {
                        words.map((word, i) => {
                            const start = i / words.length;
                            const end = start + (1 / words.length);
                            console.log([start, end]);
                            return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                        })
                    }
                </p>
            </div >
        </>
    )

}

const Word = ({ children, range, progress }) => {
    const characters = children.split("");
    const amount = range[1] - range[0];
    const step = amount / children.length;
    return (
        <spam className={styles.word} >
            {
                characters.map((character, i) => {
                    const start = range[0] + (step * i);
                    const end = range[0] + (step * (i + 1));
                    return <Character key={i} range={[start, end]} progress={progress}>{character}</Character>
                })
            }
        </spam>
    )
}

const Character = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <spam>
            <spam className={styles.shadow}>{children}</spam>
            <motion.span style={{ opacity }}>
                {children}
            </motion.span>
        </spam>
    )

} 