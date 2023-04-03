import st from './Button.module.css';

const Button = ({ pageIncrement }) => {
  return (
    <>
      <button className={st.Button} onClick={() => pageIncrement()}>
        Load more
      </button>
    </>
  );
};

export default Button;
