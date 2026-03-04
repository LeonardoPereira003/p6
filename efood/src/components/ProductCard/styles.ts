    import styled from 'styled-components'

    export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;

    display: flex;
    justify-content: center;
    align-items: center;
    `

    export const Modal = styled.div`
    background-color: #e66767;
    padding: 32px;
    max-width: 1024px;
    width: 90%;
    position: relative;
    `

    export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    `

    export const Content = styled.div`
    display: flex;
    gap: 24px;
    align-items: flex-start;
    `

    export const Image = styled.img`
    width: 280px;
    height: 280px;
    object-fit: cover;
    flex-shrink: 0;
    `

    export const Info = styled.div`
    display: flex;
    flex-direction: column;
    color: #ffffff;
    flex: 1;

    h2 {
        font-size: 18px;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
    }
    `

    export const Button = styled.button`
    width: 218px;
    height: 24px;

    background-color: #FFEBD9;
    color: #e66767;

    border: none;
    font-weight: 700;
    cursor: pointer;
    `