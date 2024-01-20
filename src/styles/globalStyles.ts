import styled, {css} from "styled-components";


interface iImageProps {
    imageSize?: 'lg' | 'md' | 'sm';
    imageRadius?: 'lg' | 'md' | 'none';
    cursor?: 'pointer';
}

interface iButtonProps {
    buttonBackground?: 'transparent' | 'color';
}

interface iCardProps {
    cardSize?: 'lg' | 'md';
}

interface iTextProps {
    fontSize?: 'lg' | 'md' | 'sm';
    color?: string;
    fontweight?: string;
}

interface iContainerProps {
    flexdirection?: 'row' | 'col';
    gap?: number;
    alignItems?: 'center' | 'start' | 'end';
    justifyContent?: 'center' | 'start' | 'end';
}


export const Container = styled.div<iContainerProps> `
    display: flex;

    ${({alignItems}) => {
        return css `
            align-items: ${alignItems};
        `
    }};

    ${({justifyContent}) => {
        return css `
            justify-content: ${justifyContent};
        `
    }};

    ${({flexdirection}) => {
        switch(flexdirection) {
            case 'row':
                return css `
                    flex-direction: row;
                `
            case 'col':
                return css `
                    flex-direction: column;
                `
        }
    }};

    ${({gap}) => {
        return css `
            gap: ${gap}px;
        `
    }};
`

export const Header = styled.div `
    width: 100%;
    height: 93px;
    background-color: #2b2b2b;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Main = styled.main `
    width: 100%;
    height: calc(100% - 93px);
    background-color: #343434;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 50px;
`

export const Card = styled.div<iCardProps> `
    ${({cardSize}) => {
        switch(cardSize) {
            case 'lg':
                return css `
                    width: 100%;
                `
            case 'md':
                return css `
                    width: 90%;
                `
        }
    }};
    height: auto;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    padding: 34px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 550px) {
        width:520px;
    }
`

export const Imagem = styled.img<iImageProps> `
    aspect-ratio: 1/1;
    ${({cursor}) => {
        return css `
            cursor: ${cursor};
        `
    }};
    ${({imageSize}) => {
        switch(imageSize) {
            case 'lg':
                return css `
                    width: 88px;
                `
            case 'md':
                return css `
                    width: 24px; 
                `
            case 'sm':
                return css `
                    width: 20px; 
                `
        }
    }};

    ${({imageRadius}) => {
        switch(imageRadius) {
            case 'lg':
                return css `
                    border-radius: 36px;
                `
            case 'md':
                return css `
                    border-radius: 20px;
                `
            case 'none':
                return css `
                    border-radius: 0px;
                `
        }
    }}
`

export const Input = styled.input `
    width: 100%;
    height: 40px;
    background-color: #494949;
    color: #fff;
    font-weight: 500;
    border: 0px;
    border-radius: 8px;
    padding: 12px;
`

export const TextArea = styled.textarea `
    width: 100%;
    height: 80px;
    background-color: #494949;
    color: #fff;
    font-weight: 500;
    border: 0px;
    border-radius: 8px;
    padding: 12px;
`

export const Button = styled.button<iButtonProps> `
    width: 100px;
    height: 40px;
    border-radius: 8px;
    border: none;
    color: #5f5f5f;
    cursor: pointer;
    ${({buttonBackground}) => {
        switch(buttonBackground) {
            case 'transparent':
                return css `
                    background-color: transparent;
                `
            case 'color':
                return css `
                    color: #fff;
                    background-color: #71bb00;
                `
        }
    }};
`

export const Feed = styled.div `
    width: 90%;
    max-height: auto;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 550px) {
        width:520px;
    }
`

export const H3 = styled.h3 `
    font-size: 14px;
    font-weight: 600;
    color: #7a7a7a;
`

export const P = styled.p<iTextProps>`
    width: 100%;
    height: auto;
    text-align: start;
    color: #fff;
    ${({color}) => {
        return css `
            color: ${color};
        `
    }};

    ${({fontweight}) => {
        return css `
            font-weight: ${fontweight};;
        `
    }};

    ${({fontSize}) => {
        switch(fontSize) {
            case 'lg':
                return css `
                    font-size: 16px;
                `
            case 'md':
                return css `
                    font-size: 14px;
                `
            case 'sm':
                return css `
                    font-size: 12px;
                `
                
        }
    }};
`