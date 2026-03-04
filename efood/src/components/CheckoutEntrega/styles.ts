    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 999;
    `

    export const Container = styled.aside`
    position: fixed;
    top: 0;
    right: 0;

    width: 360px;
    height: 100vh;

    background-color: #e66767;
    padding: 32px 16px;

    display: flex;
    flex-direction: column;

    h2 {
        color: #ffe8d9;
        font-size: 16px;
        margin-bottom: 16px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    label {
        color: #ffe8d9;
        font-size: 14px;
        font-weight: 700;
    }

    input {
        color: #4b4b4b;
        font-weight: 700;
        width: 100%;
        height: 32px;
        padding: 8px;
        border: none;
        font-size: 14px;
        background-color: #ffe8d9;
    }
    `

    /*  LINHA PARA CAMPOS LADO A LADO */
    export const Row = styled.div`
    display: flex;
    gap: 8px;
    `

    /*  CONTAINER DE CADA CAMPO */
    export const Field = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    `

    export const Actions = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
        height: 32px;
        border: none;
        font-weight: 700;
        background-color: #ffe8d9;
        color: #e66767;
        cursor: pointer;
    }

    button:last-child {
        border: 1px solid #fff;
    }
    `
