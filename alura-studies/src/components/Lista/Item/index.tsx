import { TarefaProps } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends TarefaProps {
    selecionaTarefa:(tarefaSelecionada:TarefaProps) => void;
}

export function Item(
    {
        tarefa,
        tempo, 
        selecionado, 
        completado, 
        id,
        selecionaTarefa 
    } : Props){
    return (
        <li
            className={`${style.item} ${selecionado == true?style.itemSelecionado:''}`}
            onClick={() => selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}
        >
                  
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            </li>
    );
}