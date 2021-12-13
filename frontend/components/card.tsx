import styled from "styled-components"

const CardStyled = styled.div`
    align-items: center;
    height: 500px;
    width: 600px;
    background: #565c63;
    box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 20%);
    border-radius: 5px;
    padding: 10px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
`

type AppProps = {
    children: Array<JSX.Element> | JSX.Element
}

export const Card = ({ children }: AppProps) => {
    return (
        <CardStyled>
            {children}
        </CardStyled>
    )
}
