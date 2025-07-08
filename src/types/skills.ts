import type { Variants } from "framer-motion";

export interface SkillData {
    name: string;
    icon: string;
}

export interface SkillProps extends SkillData {
    index: number;
}

export type SkillAnimationVariants = Variants;
