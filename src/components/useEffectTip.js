import React, { useState } from "react";

const Txt = ({ text, setEdit }) => {
  return (
    <div>
      <div>{text}</div>
      <span
        onClick={() => {
          setEdit(true);
        }}
      >
        编辑
      </span>
    </div>
  );
};

const InputDiy = ({ text, setText, setEdit }) => {
  return (
    <input
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
      onBlur={() => {
        setEdit(false);
      }}
    />
  );
};

const UseEffectTip = () => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("text文本框内容");
  return <div>{edit ? <InputDiy text={text} setText={setText} setEdit={setEdit} /> : <Txt text={text} setEdit={setEdit} />}</div>;
};

export default UseEffectTip;
