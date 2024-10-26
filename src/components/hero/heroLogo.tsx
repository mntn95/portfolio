import * as React from "react";
import Image from "next/image";
import {
    motion,
    useTransform,
    useSpring,
    type MotionValue,
} from "framer-motion";

const HeroLogo = ({
    axisX,
    axisY,
    buttonHover,
    isMouseMoving,
    windowOffSet,
}: {
    axisX: MotionValue<number>;
    axisY: MotionValue<number>;
    buttonHover: boolean;
    isMouseMoving: boolean;
    windowOffSet: {
        innerWidth: number;
        innerHeight: number;
    };
}): React.ReactNode => {
    const xSpring: MotionValue<number> = useSpring(axisX, {
        stiffness: 100,
        damping: 10,
    });
    const ySpring: MotionValue<number> = useSpring(axisY, {
        stiffness: 100,
        damping: 10,
    });

    const rotateY = useTransform(
        xSpring,
        [0, windowOffSet.innerWidth],
        [-30, 30],
    );
    const rotateX = useTransform(
        ySpring,
        [0, windowOffSet.innerHeight],
        [10, -50],
    );

    return (
        <motion.div
            className="flex items-center justify-center"
            style={{
                rotateX: isMouseMoving ? rotateX : 0,
                rotateY: isMouseMoving ? rotateY : 0,
                transition: "0.1s",
            }}
        >
            <Image
                src={"/person.png"}
                alt="My Image"
                width={400}
                height={400}
                priority
                className="h-auto w-[150px]"
            />
            <motion.span
                className="absolute text-3xl font-semibold text-white"
                initial={{ scale: 0 }}
                animate={{
                    opacity: buttonHover ? 0 : 1,
                    scale: buttonHover ? 2 : 0,
                    y: buttonHover ? -40 : 0,
                }}
                transition={{ opacity: { delay: 0.4 } }}
            >
                Hey
            </motion.span>
        </motion.div>
    );
};

export default HeroLogo;
