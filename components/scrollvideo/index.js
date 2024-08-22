import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

// const VideoScroll = () => {
//     const videoRef = useRef(null);
//     const { scrollY } = useScroll();

//     // Control video playback speed based on scroll
//     const videoFrame = useTransform(scrollY, [0, 1000], [0, 20]);

//     useEffect(() => {
//         videoFrame.onChange((v) => {
//             if (videoRef.current) {
//                 videoRef.current.currentTime = v;
//             }
//         });
//     }, [videoFrame]);


const VideoScroll = () => {
    const videoRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // Map scroll progress to the video duration
    const videoTime = useTransform(scrollYProgress, [0.65, 1], [0, 15]);

    useEffect(() => {
        videoTime.onChange((v) => {
            if (videoRef.current) {
                videoRef.current.currentTime = v;
            }
        });
    }, [videoTime]);

    useMotionValueEvent(scrollYProgress, "change",
        (latest) => {
            console.log(latest)
        }
    )

    //     return (
    //         <div style={{ height: "200vh", background: "#333" }}>
    //             <motion.video
    //                 ref={videoRef}
    //                 src="skab.MP4"
    //                 style={{ width: "30%", position: "fixed", top: 0, left: 0 }}
    //             // width: "50%",
    //             // position: "fixed",
    //             // top: 500, 
    //             // left: 0,
    //             // x: "50%",
    //             // y: "-110%",
    //             // }}
    //             />
    //         </div>
    //     );
    // };

    return (
        <div style={{ height: "200vh", background: "#ffffff" }}>
            <motion.video
                ref={videoRef}
                src="skab.MP4" // Replace with your video URL or path
                style={{ width: "100%", top: 0, left: 0 }}
            />
            <motion.div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "5px",
                    background: "red",
                    scaleX: scrollYProgress,
                    transformOrigin: "0%",
                }}
            />
        </div>
    );
};

export default VideoScroll;