import classes from './UserInput.module.css';

const Card = (props) => {
  return <div className={classes.mainDiv}>{props.children}</div>;
};
export default Card;
