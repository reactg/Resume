import React from 'react';
import s from './../RegistrationForm/RegistrationForm.module.css';
import Timeline from '../Timeline/Timeline';

const Address = (props) => {

    let newCountryElement = React.createRef();
    let newCityElement = React.createRef();
    let newAddressElement = React.createRef();
    
    let countryPost = () => {
        props.dispatch({ type: 'COUNTRY-TEXT' })
    }
    let cityPost = () => {
        props.dispatch({ type: 'CITY-TEXT' })
    }
    let addressPost = () => {
        props.dispatch({ type: 'ADDRESS-TEXT' })
    }
    
    let onCountryChange = () => {
        let text = newCountryElement.current.value;
        props.dispatch({ type: 'COUNTRY-TEXT', newText: text });
    }
    let onCityChange = () => {
        let text = newCityElement.current.value;
        props.dispatch({ type: 'CITY-TEXT', newText: text });
    }
    let onAddressChange = () => {
        let text = newAddressElement.current.value;
        props.dispatch({ type: 'ADDRESS-TEXT', newText: text });
    }

    return (
        <div className={s.block}>
            <form>
                <div className={s.timelineSuccess}>
                    <Timeline />
                </div>
                <span>Country</span>
                <div>
                    <input onChange={onCountryChange} ref={newCountryElement} placeholder={'country'} value={props.post.country} />
                </div>
                <span>City</span>
                <div>
                    <input onChange={onCityChange} ref={newCityElement} placeholder={'City'} value={props.post.city} />
                </div>
                <span>Address</span>
                <div>
                    <input onChange={onAddressChange} ref={newAddressElement} placeholder={'address'} value={props.post.address} />
                </div>
                   <button className={s.next}><a href='/Categories'>NEXT</a></button> 
            </form>
        </div>
    );
}

export default Address;