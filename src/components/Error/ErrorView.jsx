import errorPic from '../../img/error.gif';
import s from './ErrorView.module.css';

const ErrorView = () => {
  return (
    <div className={s.errorWrapper}>
      <img className={s.errorImg} src={errorPic} alt="" />
      <p className={s.errorDesc}>Извините, по Вашему запросу ничего не найдено! Попробуйте изменить запрос.</p>
    </div>  
  )
}

export default ErrorView;