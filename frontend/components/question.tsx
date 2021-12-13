import { useEffect } from "react"
import { Button } from "./button"
import { Card } from "./card"





type AppProps = {
    numberChoice: number
    setActualQuestion: Function
    onClick: Function
    questionObject: {
        question: string
        response: {
            response: string
            id: string
            isGoodResponse: boolean
        }[]
    }
}

export const Response = ({ numberChoice, onClick, questionObject }: AppProps) => {
    const { response } = questionObject
    const falseResponse = response.filter(r => !r.isGoodResponse)
    let fullResponse = response.filter(r => r.isGoodResponse)
    if (numberChoice === 2) {
        fullResponse.push(falseResponse[Math.floor(Math.random() * 3)])
    } else {
        fullResponse = response
    }
    return (
        <>
            <div>
                {fullResponse.map(r => <Button key={r.id} onClick={() => { onClick(r) }}>{r.response}</Button>)}
            </div>
        </>
    )
}
