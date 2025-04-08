
import React from "react"
export default function Heading({ children, level = 1, ...props }) {
    level = Math.min(Math.max(Math.floor(level), 1), 6); // Asegura que esté entre 1 y 6

    return React.createElement(`h${level}`, props, children);


    return React.createElement(`h${level}`, props, children);
}

