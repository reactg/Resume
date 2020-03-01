import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return(
        <div>
        <span>Прокидывание колбеков построено напрямую с BLL в UI.<br/>
         Без построения HOC-контейнерных компонент  соответственно отсутствуют mapStateToProps и mapDispatchToProps<br/>
         Формы не валидированы (могу сделать если нужно:) за дополнительный промежуток времени).<br/> 
         Роуты прокинуты по "хлебным крошкам" (breadCrumb) (Кликабельны).<br/> Кнопка пролистывает напрямую посредством hrefa без onChange


         </span>
        <nav className={style.nav}>
            
                <button className={style.item}><a href='/RegistrationForm'>Welcome to registration</a></button>
        </nav>
        </div>
    )
}

export default Navbar;