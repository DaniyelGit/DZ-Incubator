import s from './Loader.module.css'
import preloader from './preloader.svg';

export const Loader = () => {


   return (
      <div className={s.loader}/>
      /*<div>
         <img src={preloader} alt="preloader" className={s.loader}/>
      </div>*/
   )
}
