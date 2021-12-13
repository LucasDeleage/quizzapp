import Link from "next/link"
import styled from "styled-components"
import { Button } from "./button"
import { Card } from "./card"

type AppProps = {
    themes: string[]
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%
`
export const SelectTheme = ({ themes }: AppProps) => {
    return (
        <Card>
            <h1>Choose a theme</h1>
            <Container>
                {themes.map((t, index) =>
                    <Link key={index} href={`/${t}`}>
                        <Button onClick={() => { }}>{t}</Button>
                    </Link>
                )}
            </Container>
        </Card>
    )
}
