"use client"

import React, { useRef } from "react"
import "./horizintalscroll.css"
import One from "../../public/images/item01.png"
import Two from "../../public/images/item02.png"
import Three from "../../public/images/item03.png"
import Four from "../../public/images/item04.png"
import { motion, useScroll, useTransform } from "framer-motion"
import ImageContainer from "../ImageContainer/ImageContainer"


const HorizontalScroll = () => {

    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({ target: targetRef })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"])

    return (
        <div className="carousel" ref={targetRef}>
            <div className="contentContainer">
                <motion.div className="images" style={{ x }}>
                    <div className="imageItem">
                        <ImageContainer
                            imageSource={One}
                            description={"History"} />
                    </div>
                    <div className="imageItem">
                        <ImageContainer
                            imageSource={Two}
                            description={"History tour"} />
                    </div>
                    <div className="imageItem">
                        <ImageContainer
                            imageSource={Three}
                            description={"Hiking"} />
                    </div>
                    <div className="imageItem">
                        <ImageContainer
                            imageSource={Four}
                            description={"Biking"} />
                    </div>

                </motion.div>
            </div>
        </div>
    )
};

export { HorizontalScroll }
