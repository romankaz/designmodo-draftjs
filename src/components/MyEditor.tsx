import React, {useState, useEffect} from 'react'
import {ContentState, Editor,EditorState, RichUtils, convertToRaw, convertFromRaw, DraftStyleMap, DefaultDraftBlockRenderMap} from 'draft-js'
import styled from "styled-components"
import { Toolbar } from './Toolbar'
import createStyles from 'draft-js-custom-styles'

const customStyleMap: DraftStyleMap = {
  'ALIGNCENTER': {
    'textAlign': 'center',
  }, 
  'HIGHLIGHT': {
    'backgroundColor': '#faed27',
  },

 };

 const getBlockStyle: any = (block:any) => {
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


const { styles, customStyleFn, exporter } = createStyles(['font-size', 'color', 'text-transform', 'font-family'], 'CUSTOM_');

const TextAlignCenter = styled.div`
  text-align: center; 
`

function myBlockStyleFn() {

}

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

const [value, setValue] = useState('This is the initial content of the editor...')
const [editorState, setEditorState] = useState(EditorState.createEmpty())

const editor = React.useRef(null)

const onChange = (evt:any) => {
  // setValue(evt.target.value)
  setEditorState(evt)
}

function focusEditor() {
  const currentFocus:any = editor.current
  if(currentFocus) {
    currentFocus.focus()
  }
}

const mySave = () => {
  const currentRef:any = editor.current
  const contentState = editorState.getCurrentContent()
  const raw = convertToRaw(contentState)
  console.log(raw)
  if (currentRef) {
    localStorage.setItem('myContent', JSON.stringify(raw, null, 2))
  }
}

const myLoad = () => {
  const myContent:any = localStorage.getItem("myContent");
  if(myContent) {
    console.log(myContent.value)
    const contentState = convertFromRaw(JSON.parse(myContent))
    // setEditorState(EditorState.createWithContent(ContentState.createFromText(myContent)))
    setEditorState(EditorState.createWithContent(contentState))
    // setEditorState(editorState)
    // setValue(myContent)
  }
  }
 

const toggleColor = (e:any) => {
  e.preventDefault()
  setEditorState(styles.color.toggle(editorState, e.target.value))
}

const alignCenter = (e:any) => {
  e.preventDefault()
  console.log("Hello align")
  //  setEditorState(styles.textTransform.toggle(editorState, 'uppercase'))
  // setEditorState(RichUtils.toggleInlineStyle(editorState, 'ALIGNCENTER'))
   setEditorState(RichUtils.toggleBlockType(editorState, 'right'))
}

const lineHeight = (e:any) => {
  e.preventDefault()
  setEditorState(RichUtils.toggleBlockType(editorState, 'lheight'))
}

const letterSpace = (e:any) => {
  e.preventDefault()
  setEditorState(RichUtils.toggleBlockType(editorState, 'lspace'))
}

useEffect(() => {
  focusEditor()
  myLoad()

}, [])

const options = (x:any) => x.map((fontSize:any) => {
  return <option key={fontSize} value={fontSize}>{fontSize}</option>;
})


  return(
    <>
    <EditorContainer onClick={focusEditor}>
      <TextArea>
        <Editor
          customStyleFn={customStyleFn}
          customStyleMap={customStyleMap}
          blockStyleFn={getBlockStyle}
          placeholder={value}
          ref={editor}
          editorState={editorState}
          onChange={onChange}
        >
       </Editor>
      </TextArea>  
    </EditorContainer>
    <Toolbar onSaveClick={mySave} editorState={editorState} updateEditorState={setEditorState} styles={styles}/>
    <button onClick={mySave}>Save</button>
    <button onClick={alignCenter}>Align Center</button>
    <button onClick={lineHeight}>Line Height</button>
    <button onClick={letterSpace}>Letter Space</button>
   {/* <select onChange={toggleColor}>
            {options(['green', '#40be65', 'red', 'purple', 'orange'])}
   </select> */}
  </>
  )
}