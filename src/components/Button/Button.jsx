import st from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ pageIncrement }) => {
  return (
    <>
      <button className={st.Button} onClick={() => pageIncrement()}>
        Load more
      </button>
    </>
  );
};

Button.propTypes={
  pageIncrement:PropTypes.func.isRequired
}

export default Button;
