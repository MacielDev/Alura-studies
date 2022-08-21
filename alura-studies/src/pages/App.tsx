import { useState } from "react";
import { Cronometro } from "../components/Cronometro";
import {Formulario} from "../components/Formulario";
import { Lista } from "../components/Lista";
import { TarefaProps } from "../types/tarefa";
import style from './App.module.scss';

export function App() {
  const [tarefas, setTarefas] = useState<TarefaProps[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}


