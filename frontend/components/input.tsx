import styled from 'styled-components'

const InputStyled = styled.input`
    border-radius: 10px;
    text-align: center;
    border: none;
    background: rgb(0 0 0 / 61%);
    border: 1px solid #4fd1c5;
    width: 200px;
    height: 45px;
    color: #4fd1c5;
    &:focus{
        outline: none;
        box-shadow: 0 0 30px rgba(0,255,203,.64);
    }
}
`

type AppProps = {
    placeholder: string
    state: Function
}

export const Input = ({ placeholder, state }: AppProps) => {
    return (
        <InputStyled placeholder={placeholder.toUpperCase()} onChange={(e) => state(e.target.value)} />
    )
}
