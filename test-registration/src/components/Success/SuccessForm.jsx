import React, {Component} from 'react';
import s from './../RegistrationForm/RegistrationForm.module.css';
import Timeline from './../Timeline/Timeline';

class Success extends Component {

    render(){
        return(   
            <div className={s.block}>
                <form>
                    <div className={s.timeline}>
                        <Timeline />
                    </div>

                    <h2 className={s.text1}>Success</h2>
                    <h3 className={s.text2}> Your account was successfuly registered.<br/>
                        Please wait for account approval. <br/>
                        It cantake up to 24 hours.
                    </h3>
                    <h3 className={s.text3}>
                            Have questions?<br/>
                            Contact info@site.com
                    </h3> 
                    
                </form>
            </div>
        );
    }
}

export default Success;