    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
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
    
    color: #ffe8d9;
    

    h2 {
        margin-bottom: 16px;
        font-size: 18px;
    
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
        padding: 8px;
        color: #4b4b4b;
        font-weight: 700;
        border: none;
        font-size: 14px;
        background-color: #ffe8d9;
        
    }
    `

    export const Row = styled.div`
    display: flex;
    gap: 16px;

    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    `

    export const Actions = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
        padding: 8px;
        font-weight: 700;
        cursor: pointer;
        border: none;
    }

    button:first-child {
        background-color: #ffe8d9;
        color: #e66767;
    }

    button:last-child {
        background-color: #ffe8d9;
        border: 1px solid #fff;
        color: #e66767;
    }
    `
