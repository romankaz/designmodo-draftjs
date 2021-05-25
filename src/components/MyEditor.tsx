import React, {useState, useEffect} from 'react'
import {Editor,EditorState, convertToRaw, convertFromRaw, ContentBlock} from 'draft-js'
import styled from "styled-components"
import { Toolbar } from './Toolbar'
import createStyles from 'draft-js-custom-styles'


 const getBlockStyle: any = (block:ContentBlock) => {
  switch (block.getType()) {
      case 'left':
          return 'align-left';
      case 'center':
          return 'align-center';
      case 'right':
          return 'align-right';
      case 'justify':
          return 'align-justify';
      case 'lheight':
          return 'line-height';
      case 'lspace':
          return 'letter-space';
      default:
          return null;
  }   
}

const { styles, customStyleFn } = createStyles(['font-size', 'color', 'text-transform', 'font-family'], 'CUSTOM_');


const EditorContainer = styled.div`
  position: absolute;
  width: 608px;
  height: 720px;
  left: 296px;
  top: 40px;
  background: #FFFFFF;
`
const TextArea = styled.div`
  position: fixed;
  width: 548px;
  height: 500px;
  left: 326px;
  top: 70px;
  font-family: Inter;
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  .align-right {
    text-align: right;
  };
  .align-center {
    text-align: center;
  };
  .align-left {
    text-align: left;
  };
  .align-justify {
    text-align: justify;
  };
  .line-height {
    line-height: 125%;
  };
  .letter-space {
    letter-spacing: 0.6px;
  };
`

export const MyEditor:React.FC = () => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const editor = React.useRef(null)

  const onChange = (e:EditorState) => {
    setEditorState(e)
  }

  const focusEditor = () => {
    const currentFocus:any = editor.current
    if(currentFocus) {
      currentFocus.focus()
    }
  }

  const mySave = () => {
    const currentRef:any = editor.current
    const contentState = editorState.getCurrentContent()
    const raw = convertToRaw(contentState)
    if (currentRef) {
      localStorage.setItem('myContent', JSON.stringify(raw, null, 2))
    }
  }

const myLoad = () => {
  const myContent:any = localStorage.getItem("myContent");
  if(myContent) {
    const contentState = convertFromRaw(JSON.parse(myContent))
    setEditorState(EditorState.createWithContent(contentState))
  }
}

useEffect(() => {
  focusEditor()
  myLoad()

}, [])

  return(
    <>
    <EditorContainer onClick={focusEditor}>
      <TextArea>
        <Editor
          customStyleFn={customStyleFn}
          blockStyleFn={getBlockStyle}
          placeholder='Type here...'
          ref={editor}
          editorState={editorState}
          onChange={onChange}
        >
       </Editor>
      </TextArea>  
    </EditorContainer>
    <Toolbar onSaveClick={mySave} editorState={editorState} updateEditorState={setEditorState} styles={styles}/>
  </>
  )
}