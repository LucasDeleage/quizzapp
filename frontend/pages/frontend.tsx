import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SelectTheme } from '../components/selectTheme'
import { StartContainer } from '../components/startContainer'



const Main = styled.div`
  height: 100vh;
  width: 100vw;
  background: #141b24;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Frontend: NextPage = () => {
    useEffect(() => {
        localStorage.getItem("pseudo")
            ? setIsPseudo(true)
            : setIsPseudo(false)
    }, [])
    const [input, setInput] = useState<string>("")
    const [isPseudo, setIsPseudo] = useState<boolean>(false)
    const onClick = (): void => {
        localStorage.setItem('pseudo', input)
        setIsPseudo(true)
    }
    const onSelectTheme = () => {

    }
    const themes: string[] = ['frontend', 'backend', 'devops']

    return (
        <Main>
            {isPseudo
                ? <SelectTheme onClick={onSelectTheme} themes={themes} />
                : <StartContainer setInput={setInput} onClick={onClick} />}
        </Main>
    )
}
export default Frontend
