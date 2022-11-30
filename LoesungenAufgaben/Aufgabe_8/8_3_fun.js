"use-strict"

export const webData = async () => {
    return await (await fetch("8_3.json")).json()
}