import type { MotionValue } from "framer-motion";

export interface WindowOffSet {
    innerWidth: number;
    innerHeight: number;
}

export interface MouseEventCoords {
    clientX: number;
    clientY: number;
}

export interface HeroLogoProps {
    axisX: MotionValue<number>;
    axisY: MotionValue<number>;
    buttonHover: boolean;
    isMouseMoving: boolean;
    windowOffSet: WindowOffSet;
}

export type HeroContentProps = HeroLogoProps;

export interface HeroButtonsProps {
    setButtonHover: (bool: boolean) => void;
}

export interface HeroState {
    windowOffSet: WindowOffSet;
    isMouseMoving: boolean;
    buttonHover: boolean;
}
