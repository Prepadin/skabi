'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s from "./styles.scss"
import { useFrame, useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

const BallAnimation = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const frameCount = 269;
    const images = useRef([]);
    const ball = useRef({ frame: 0 });


    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        contextRef.current = canvas.getContext('2d');

        const currentFrame = (index) => `/best-ball/${(index + 1).toString()}.jpg`;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            console.log(currentFrame(i));
            images.current.push(img);
        }

        images.current[0].onload = render;

        gsap.to(ball.current, {
            frame: frameCount - 1,
            snap: 'frame',
            ease: 'none',
            scrollTrigger: {
                scrub: 10,
                pin: canvas,
                end: '500%',
            },
            onUpdate: render,
        });

        gsap.fromTo(
            '.ball-text',
            {
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    scrub: 1,
                    start: '50%',
                    end: '60%',
                },
                onComplete: () => {
                    gsap.to('.ball-text', { opacity: 0 });
                },
            }
        );

        function render() {
            const context = contextRef.current;
            if (images.current.length > 0) {
                context.canvas.width = images.current[0].width;
                context.canvas.height = images.current[0].height;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(images.current[ball.current.frame], 0, 0);
            }
        }

        // Clean up ScrollTrigger instances on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // const { viewport } = useThree();
    // const ballScalingFactor = Math.max(window.innerWidth / 1300, 0.5);
    // console.log(ballScalingFactor)




    return (

        <div  >
            <canvas className={s.canvas} ref={canvasRef}></canvas>
            {/* <div className="ball-text">Ball Animation Text</div> */}
        </div>

    );
};

export default BallAnimation;