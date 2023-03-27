import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment(props) {

    // sempre inicializar o stado com o mesmo tipo de informação que será armazenada nele
    // nesse caso, um inteiro, zero.
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
       props.onDeleteComment(props.content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/vieiraanap.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Manoel Lima</strong>
                            <time title="20 de março às 00:27h" dateTime="2023-03-20 00:27:00">Cerca 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
            
        </div>
    );
}