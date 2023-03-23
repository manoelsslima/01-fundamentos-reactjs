import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

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

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type ==='link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}