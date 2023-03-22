import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/manoelsslima.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.author}>
                            <strong>Manoel Lima</strong>
                            <time title="20 de março às 00:27h" dateTime="2023-03-20 00:27:00">Cerca 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Maria, Parabéns!</p>
                </div>
                <footer>
                    <button >
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
            
        </div>
    );
}