import React, { useState, type ReactNode } from "react"
import type { Position } from "../type/Position";

interface Props {
    children: (position: Position) => ReactNode;
}

const MouseTracker = ({children}: Props) => {
    const [positon, setPosition] = useState({x:0, y:0});
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setPosition({x: e.clientX, y: e.clientY})
    }

    return (
        <div onMouseMove={handleMouseMove} className="h-48 w-full m-4">
            {children(positon)}
        </div>
    )

}

export default MouseTracker;