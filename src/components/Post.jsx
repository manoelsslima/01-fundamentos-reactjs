import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

/**
 * é possível desestruturar props para pegar só os valores direto e tirar o "props." e usar
 * diretamente "author."
 * Ex.: export function Post({ author })
 * <strong>{author.name}</strong>
 * 
 * Foi instalada a biblioteca date-fns. (npm i date-fns)
 */
export function Post(props) {

    /**
    * Estado = variáveis que desejamos que o componente monitore (as mudanças delas)
    * const comments = useState([1,2]);
    * useState retorna array com 2 posições. Usamos desestruturação.
    * a primeira posição é a variável que será modificada. a segunda posição é a
    * função que irá alterar o valor da variável. A função avisa ao react que houve
    * uma mudança. Passamos o novo valor para a variável comments (imutabilidade).
    */
    const [comments, setComments] = useState([
      'Post muito bacana, hein?!'
    ])

    // importante inicializar o estado com o mesmo tipo de dado.
    // textarea é texto, então inicializa com texto vazio ''
    const [newCommentText, setNewCommentText] = useState('')

    function handleNewCommentChange() {

        // retornando o estado da validação ao inicial. Caso contrário, após exibir a
        // mensagem de campo obrigatório, não é possível enviar um novo comentário.
        event.target.setCustomValidity('');

        // target é quem disparou o evento, no caso, o onChange do textarea
        //console.log(event.target.value);
        setNewCommentText(event.target.value);
    }

    function handleInvalidNewComment() {
        event.target.setCustomValidity('Este campo é obrigatório.');
    }

    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    });

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit'
    // }).format(props.publishedAt);

    function handleCreateNewComment() {
        event.preventDefault();
        // ... spread operator -> copia o valor da variável para um novo array
        //setComments([...comments, comments.length + 1]);
        // agora, o newCommentText está com o valor armazenado pelo estado criado newCommentText
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    // o componente que tem o estado (useState) é quem deve enviar as funções para
    // os componentes filhos poderem se comunicar com ele
    function deleteComment(commentToDelete) {
        //console.log(`Deletar comentário ${comment}`);

        // imutabilidade -> não podemos mudar a lista. Então, criamos uma nova sem o valor
        // que queremos remover
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        // atualiza a lista sem o comentário deletado. Não existe remoção por conta da
        // imutabilidade
        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={props.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type ==='link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <textarea
                    name="comment"
                    value={newCommentText}
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    onInvalid={handleInvalidNewComment}
                    required
                />
                <footer>
                    <button type="submit" disabled={newCommentText.length === 0}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    // passando uma função para o comentário (para que o comentário possa chamá-la
                    // e excluir o comentário de um componente pai). O nome da propriedade é livre
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}