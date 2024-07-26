'use client';
import { useEffect, useState } from "react"

export default function Cursor(){
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    const setMousePos = () => {
        const cursor = document.getElementById("cursor")
        if(cursor){
            cursor.style.top = `${posY + scrollY - 192}px`
            cursor.style.left = `${posX- 192}px`
        }
    }

    const handleMouse = (e:any) => {
        setPosX(e.clientX)
        setPosY(e.clientY)
        setMousePos()
    }

    const handleScroll = () => {
        setScrollY(window.scrollY)
        setMousePos()
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouse)
        return () => {
            window.removeEventListener("mousemove", handleMouse)
        }
    }, [posX, posY])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        window.addEventListener("scrollend", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("scrollend", handleScroll)
        }
    }, [scrollY])

    return(
        <div id="cursor" className="z-0 invisible absolute size-96 rounded-full bg-white mix-blend-overlay opacity-15 blur-3xl lg:visible" />
    )
}