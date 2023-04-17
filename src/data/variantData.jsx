//Data
import {homeTransition} from "./transitionData";

export const firstName = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.08,
            staggerDirection: -1,
            opacity: {
                delay: 1,
            },
        },
    },
};

export const lastName = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.08,
            staggerDirection: 1,
            opacity: {
                delay: 1,
            },
        },
    },
};

export const letter = {
    initial: {
        y: 300
    },
    animate: {
        y: 0,
        transition: {duration: 1, ...homeTransition},
    },
};
