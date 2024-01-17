import styles from "./searchButton.module.css";

interface ISearchButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}
const Button = ({ onClick, children }: ISearchButton) => {
  return (
    <button onClick={onClick} className={styles.buttoN}>
      {children}
    </button>
  );
};

export default Button;
