import React from 'react';
import s from './../RegistrationForm/RegistrationForm.module.css';
import Timeline from '../Timeline/Timeline';

const Categories = (props) => {

    let newCategory1Element = React.createRef();
    let newCategory2Element = React.createRef();
    let newCategory3Element = React.createRef();

    let category1Post = () => {
        props.dispatch({ type: 'CATEGORY1-TEXT' })
    }
    let category2Post = () => {
        props.dispatch({ type: 'CATEGORY2-TEXT' })
    }
    let category3Post = () => {
        props.dispatch({ type: 'CATEGORY3-TEXT' })
    }

    let onCategory1Change = () => {
        let text = newCategory1Element.current.value;
        props.dispatch({ type: 'CATEGORY1-TEXT', newText: text });
    }
    let onCategory2Change = () => {
        let text = newCategory2Element.current.value;
        props.dispatch({ type: 'CATEGORY2-TEXT', newText: text });
    }
    let onCategory3Change = () => {
        let text = newCategory3Element.current.value;
        props.dispatch({ type: 'CATEGORY3-TEXT', newText: text });
    }

    return (
        <div className={s.block}>
            <form>
                <div className={s.timelineSuccess}>
                    <Timeline />
                </div>
                <span>Categories 1</span>
                <div>
                    <input onChange={onCategory1Change} ref={newCategory1Element} placeholder={'category1'} value={props.post.category1} />
                </div>
                <span>Categories 2</span>
                <div>
                    <input onChange={onCategory2Change} ref={newCategory2Element} placeholder={'category2'} value={props.post.category2} />
                </div>
                <span>Categories 3</span>
                <div>
                    <input onChange={onCategory3Change} ref={newCategory3Element} placeholder={'category3'} value={props.post.category3} />
                </div>
                <button className={s.next}><a href='/Success'>NEXT</a></button>
            </form>
        </div>
    );
}

export default Categories;