import { useState } from "react";
import { Cronometro } from "../components/Cronometro";
import {Formulario} from "../components/Formulario";
import { Lista } from "../components/Lista";
import { TarefaProps } from "../types/tarefa";
import style from './App.module.scss';

export function App() {
  const [tarefas, setTarefas] = useState<TarefaProps[]>([]);
  const [selecionado, setSelecionado] = useState<TarefaProps | undefined>();

  function selecionaTarefa(tarefaSelecionada : TarefaProps){
      setSelecionado(tarefaSelecionada);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id? true : false
      })))
  }
  function finalizaTarefa(){
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores =>
      tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id) {
              return {
                  ...tarefa,
                  selecionado: false,
                  completado: true
              }
          }
          return tarefa;
      }))
  }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa} 
      />
      <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa}/>
    </div>
  );
}


