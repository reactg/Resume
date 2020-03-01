import React, {Component} from 'react';
import s from './RegistrationForm.module.css';
import Timeline from './../Timeline/Timeline';

class RegistrationForm extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return nextProps != this.props || nextState != this.state;
    };
render(){


    let newEmailElement = React.createRef();
    let newPasswordElement = React.createRef();
    let newPasswordConfirmElement = React.createRef();
    
    let emailPost = () => {
        this.props.dispatch({ type: 'EMAIL-TEXT' })
    }
    let passwordPost = () => {
        this.props.dispatch({ type: 'PASSWORD-TEXT' })
    }
    let passwordConfirmPost = () => {
        this.props.dispatch({ type: 'PASSWORD-CONFIRM-TEXT' })
    }

    let onEmailChange = () => {
        let text = newEmailElement.current.value;
        this.props.dispatch({ type: 'EMAIL-TEXT', newText: text });
    }
    let onPasswordChange = () => {
        let text = newPasswordElement.current.value;
        this.props.dispatch({ type: 'PASSWORD-TEXT', newText: text });
    }
    let onPasswordConfirmChange = () => {
        let text = newPasswordConfirmElement.current.value;
        this.props.dispatch({ type: 'PASSWORD-CONFIRM-TEXT', newText: text });
    }

    return(   
        <div className={s.block}>
            <form>
            <div className={s.timelineSuccess}>
                <Timeline />
            </div>
                <span>Email</span>
            <div>
                    <input onChange={onEmailChange} ref={newEmailElement} placeholder={'email'} value={this.props.post.email}/>
            </div>
            <span>Password</span>
            <div>
                    <input onChange={onPasswordChange} ref={newPasswordElement} placeholder={'password'} value={this.props.post.password} />
            </div>
            <span>Password Confirm</span>
            <div>
                    <input onChange={onPasswordConfirmChange} ref={newPasswordConfirmElement} placeholder={'password confirm'} value={this.props.post.passwordConfirm} />
            </div>
                <button className={s.next}><a href='/Address'>NEXT</a></button>    
            </form>
        </div>
    );}
}

export default RegistrationForm;