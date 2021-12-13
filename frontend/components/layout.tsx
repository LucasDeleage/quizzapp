import styled from "styled-components"

const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background: #141b24;
  display: flex;
  justify-content: center;
  align-items: center;
`

type AppProps = {
    children: JSX.Element | JSX.Element[]
}


export const Layout = ({ children }: AppProps) => {
    return (
        <Main>
            {children}
        </Main>
    )
}
