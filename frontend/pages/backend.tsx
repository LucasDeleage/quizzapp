import type { NextPage } from 'next'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../components/button'
import { Card } from '../components/card'
import { Layout } from '../components/layout'
import { Response } from '../components/question'


export async function getServerSideProps(_context: any) {
    const questions = await fetch('http://localhost:8000/devops', {
        method: 'GET'
    })
    return {
        props: {
            questions: await questions.json()
        },
    }
}


const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%
`

const Backend: NextPage = (props: any) => {
    const [numberChoice, setNumberChoice] = useState<number>(0)
    const [actualQuestion, setActualQuestion] = useState<number>(0)
    const { questions } = props
    const findIndex = () => {
        if (localStorage.getItem("id")) {
            const index = questions.findIndex((element: { id: string }) => element.id === localStorage.getItem("id")) + 1
            if (index >= questions.length) {
                return 0
            } else {
                return index
            }
        }
        return 0
    }
    useEffect(() => {
        localStorage.getItem("id")
            ? setActualQuestion(findIndex())
            : setActualQuestion(0)
    }, [])
    const onClick = (r: any): void => {
        if (questions.findIndex((element: { id: string }) => element.id === r.questionId) == questions.length - 1) {
            Router.push("/")
        } else {
            localStorage.setItem('id', r.questionId)
            setActualQuestion(actualQuestion + 1)
            setNumberChoice(0)
        }

    }

    return (
        <Layout>
            <Card>
                <h1>{questions[actualQuestion].question}</h1>
                {numberChoice === 0
                    ? <ButtonContainer>
                        <Button onClick={() => setNumberChoice(2)}>DUO</Button>
                        <Button onClick={() => setNumberChoice(4)}>CARRE</Button>
                    </ButtonContainer>
                    : <Response onClick={onClick} questionObject={questions[actualQuestion]} setActualQuestion={setActualQuestion} numberChoice={numberChoice} />
                }
                <div style={{ display: "flex", justifyContent: "flex-end", width: '100%' }}>
                    {actualQuestion + 1}/10
                </div>
            </Card>
        </Layout>
    )
}
export default Backend
