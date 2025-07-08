import React from "react";

export interface AboutData {
    title: string;
    amount: number;
    icon: React.ReactNode;
}

export interface AchievementsProps {
    title: string;
    amount: number;
    children: React.ReactNode;
}
