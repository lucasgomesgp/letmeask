import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

//Pega os elementos do botão do html, para não precisar criar 
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    //O ? significa que é opcional
    isOutlined?: boolean;
};

//Pega o isOutlined separado e o restante das props vai para o parâmetro props
export function Button({ isOutlined = false, ...props }: ButtonProps) {
    return (
        <button
            className={`button ${isOutlined ? 'outlined' : ''}`}
            {...props} />
    );
}