import React from 'react';
import style from'./Botao.module.scss';

interface BotaoProps {
    children: React.ReactNode;
    type? :'submit'|'button';
}
export function Botao({children, type="button"} : BotaoProps){
    return(
        <button 
          type={type}
          className={style.botao}
        >
            {children}
        </button>
    );
}

