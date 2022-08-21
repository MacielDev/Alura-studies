import { TarefaProps } from '../../types/tarefa';
import { Item } from './Item';
import style from  './Lista.module.scss';


export function Lista ({ tarefas } :{ tarefas:Array<TarefaProps> }){ 
  
    return(
       <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item, index) => (
                <Item 
                  key={index}
                  {...item}
                />
            ))}
        </ul>
       </aside> 
    );
}