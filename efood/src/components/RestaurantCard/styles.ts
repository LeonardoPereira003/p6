    import styled from 'styled-components'

    export const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid #e66767;

    display: flex;
    flex-direction: column;

    overflow: hidden;
    height: 100%;
    `

    export const ImageWrapper = styled.div`
    position: relative;
    `

    export const Image = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
    `

    export const Tag = styled.span`
    position: absolute;
    top: 16px;
    right: 16px;

    background-color: #e66767;
    color: #ffffff;

    font-size: 12px;
    font-weight: 700;
    padding: 4px 6px;
    `

    export const Content = styled.div`
    padding: 16px;

    display: flex;
    flex-direction: column;
    flex: 1;
    `

    export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    `

    export const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #e66767;
    `

    export const Rating = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 14px;
    font-weight: 700;
    color: #e66767;
    line-height: 22px;
    `

    export const Description = styled.p`
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: #e66767;

    margin-bottom: 16px;
    `

    export const ButtonWrapper = styled.div`
    margin-top: auto;
    `

    export const Button = styled.button`
    margin-top: auto;

    background-color: #e66767;
    color: #FFEBD9;

    border: none;
    padding: 6px 12px;

    font-size: 14px;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
    `