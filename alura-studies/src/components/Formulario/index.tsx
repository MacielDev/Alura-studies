import React, { useState } from 'react';
import { TarefaProps } from '../../types/tarefa';
import {Botao} from '../Botao';
import style from './Formulario.module.scss';

interface FomularioProps{
     setTarefas:React.Dispatch<React.SetStateAction<TarefaProps[]>>;

}
export function Formulario({setTarefas} : FomularioProps){
     const [tarefa, setTarefa] = useState('');
     const [tempo, setTempo] = useState('00:00');
     
     function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
          evento.preventDefault();
          setTarefas(tarefasAntigas => [...tarefasAntigas,{...{tarefa,tempo}}]);
     }
     
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
           <label htmlFor="tarefa">
                Adicione um novo estudo
           </label>
           <input 
                type="text"
                name="tarefa"
                id="tarefa" 
                value = {tarefa}
                onChange={evento => setTarefa(evento.target.value)}
                placeholder="O que você quer estudar?"
                required
             />
        </div>
        <div className={style.inputContainer}>
           <label htmlFor="tempo">
                Tempo
           </label>
           <input 
                type="time"
                step="1"
                name="tempo"
                value={tempo}
                onChange={evento => setTempo(evento.target.value)}
                id="tempo"
                min="00:00:00"
                max="05:30:00"
                required
             />
        </div>
        <Botao type="submit">
          Adicionar
        </Botao>
    </form>
    );
}
