import React from 'react';
import style from'./Botao.module.scss';

interface BotaoProps {
    children: React.ReactNode;
    type? :'submit'|'button' | 'reset' | undefined;
    onClick?: () => void
}
export function Botao({children, type="button", onClick} : BotaoProps){
    return(
        <button 
          type={type}
          onClick={onClick}
          className={style.botao}
        >
            {children}
        </button>
    );
}

