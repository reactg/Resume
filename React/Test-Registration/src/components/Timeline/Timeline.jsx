import React, {Component} from 'react';
import s from './Timeline.module.css';

class Timeline extends Component {

    render(){
        return(
            <ul className={s.breadcrump}>
                <li>
                    <a href="/RegistrationForm">                        
                        <span className={s.text } active>CONTACTS</span>
                    </a>
                </li>
                <li>
                    <a href="/Address">
                        <span className={s.text}>ADDRESS</span>
                    </a>
                </li>
                <li>
                    <a href="/Categories">
                        <span className={s.text}>CATEGORIES</span>
                    </a>
                </li>
                <li>
                    <a href="/Success">
                        <span className={s.text}>SUCCESS</span>
                    </a>
                </li>
            </ul>
        )
    }
}

export default Timeline;