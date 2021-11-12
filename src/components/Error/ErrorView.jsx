import errorPic from '../../img/error.gif';
import s from './ErrorView.module.css';

const ErrorView = () => {
  return (
    <>
      <img className={s.errorImg} src={errorPic} alt="" />
      <p className={s.errorDesc}>Извините, по Вашему запросу ничего не найдено! Попробуйте изменить запрос.</p>
    </>  
  )
}

export default ErrorView;