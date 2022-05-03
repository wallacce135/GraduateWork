import './TextareaContainer.css'
import {createRef, forwardRef, useEffect, useState} from "react";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

function TextareaContainer(props) {
  const ref = createRef();
  return <Textarea ref={ref} {...props}/>
}

const Textarea = forwardRef((props, ref) => {
  const [scroll, changeScroll] = useState("auto")
  const [height, changeHeight] = useState("auto")

  useEffect(() => {
    const scrollHeight = ref.current.scrollHeight;
    changeHeight(scrollHeight - 32 + "px");
    changeScroll(scrollHeight - 32 + "px");
  }, [props.value])

  function onChangeHandler(e) {
    changeHeight("auto")
    changeScroll(ref.current.scrollHeight - 32 + "px")

    if (props.handler) {
      props.handler(e)
    }
  }

  return (
      <div style={{height: scroll}}  className="textarea">
        <label htmlFor={props.id} className="textarea__label">{props.label}</label>
        <textarea
            placeholder='Здесь может быть ваш текст...'
            required={props.required}
            rows={1}
            id={props.id}
            style={{height: height}}
            ref={ref}
            value={props.value}
            onChange={onChangeHandler}
            className="textarea__input" />
      </div>
  )
})

export default TextareaContainer