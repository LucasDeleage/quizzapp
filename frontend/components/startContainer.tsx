import styled from "styled-components"
import { Button } from "./button"
import { Card } from "./card"
import { Input } from "./input"

const TextContainer = styled.div`
    justify-content: space-around;
    align-items: center;
    display: flex;
    width: 100%;
    padding: 10px
`

type AppProps = {
    setInput: Function
    onClick: Function
}

export const StartContainer = ({ setInput, onClick }: AppProps) => {
    return (
        <Card>
            <h1>RULES</h1>
            <ul>
                <li>rule 1</li>
                <li>rule 1</li>
                <li>rule 1</li>
                <li>rule 1</li>
                <li>rule 1</li>
            </ul>
            <TextContainer>
                <Input placeholder='pseudo' state={setInput} />
                <Button onClick={onClick}>Commencer</Button>
            </TextContainer>
        </Card>
    )
}
