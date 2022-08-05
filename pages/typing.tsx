import { NextPage } from "next";
import { useEffect, useState } from "react";
import Typing from "../components/Typing";


const Page: NextPage = () => {
    const [keyPressed, changeKeyPress] = useState([""])

    useEffect(() => {
        document.addEventListener("keydown", (key) => {
            changeKeyPress([key.key])
        })
    }, [])
    return <Typing keyPressed={keyPressed} />
}

export default Page