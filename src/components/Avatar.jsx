import styles from "./Avatar.module.css";

export function Avatar(props) {
    /**
     * é possível usar desestruturação para pegar os atributos
     * 
     * export function Avatar({ hasBorder=true, src })
     * 
     * Assim, nas propriedades, pode omitir o props. e o hasBorder default será true.
     */
    return (
        <img
            className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={props.src}
        />
    );
}