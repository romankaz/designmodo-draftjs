import React, { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import {JustifyCenter} from '@styled-icons/open-iconic/JustifyCenter'
import {JustifyLeft} from '@styled-icons/open-iconic/JustifyLeft'
import {JustifyRight} from '@styled-icons/open-iconic/JustifyRight'
import {AlignJustify} from '@styled-icons/fa-solid/AlignJustify'
import {FormatLineSpacing} from '@styled-icons/material/FormatLineSpacing'
import {TextSpacing} from '@styled-icons/remix-editor/TextSpacing'

import {ChevronDown} from '@styled-icons/boxicons-regular/ChevronDown'
import {StyledIcon} from '@styled-icons/styled-icon'
import {EditorState, RichUtils} from 'draft-js'
import {FontSize2} from '@styled-icons/remix-editor/FontSize2'

interface ToolbarProps {
  onSaveClick(): void,
  editorState: EditorState,
  updateEditorState: React.Dispatch<React.SetStateAction<EditorState>>,
  styles: any
}

interface IconProps {
  icon: StyledIcon
}

interface IActiveIcon {
  isActive: boolean
}

interface ITextColor {
  textColor: string
}

interface IFontFamily {
  fontFamily: string
}



const ToolbarContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 800px;
  left: 1200px;
  top: 0px;
  background: #FFFF;
`

const AlignMiddleIcon = styled(JustifyCenter)<IActiveIcon>`
  position: fixed;
  width: 16px;
  height: 16px;
  left: 1286px;
  top: 252px;
  color: #D5D9DD;
  
  &:hover{
    color: #97a5ac;
  }

  ${props =>
      props.isActive &&
      `color: #13A4EC;`
  }
`

const JustifyLeftIcon = styled(JustifyLeft)<IActiveIcon>`
  position: fixed;
  width: 16px;
  height: 16px;
  left: 1234px;
  top: 252px;
  color: #D5D9DD;
  &:hover{
    color: #97a5ac;
  }

  ${props =>
      props.isActive &&
      `color: #13A4EC;`
  }
`

const JustifyRightIcon = styled(JustifyRight)<IActiveIcon>`
  position: fixed;
  width: 16px;
  height: 16px;
  left: 1338px;
  top: 252px;
  color: #D5D9DD;
  &:hover{
    color: #97a5ac;
  }
  ${props =>
      props.isActive &&
      `color: #13A4EC;`
  }
`
const AlignJustifyIcon = styled(AlignJustify)<IActiveIcon>`
  position: fixed;
  width: 16px;
  height: 16px;
  left: 1391px;
  top: 252px;
  color: #D5D9DD;
  &:hover{
    color: #97a5ac;
  }
  ${props =>
      props.isActive &&
      `color: #13A4EC;`
  }
`

const FormatLineSpacingIcon = styled(FormatLineSpacing)<IActiveIcon>`
  position: fixed;
  width: 22px;
  height: 22px;
  left: 1223px;
  top: 199px;
  color: #D5D9DD;
  &:hover{
    color: #97a5ac;
  }
  ${props =>
      props.isActive &&
      `color: #13A4EC;`
  }
`

const TextSpacingIcon = styled(TextSpacing)<IActiveIcon>`
  position: fixed;
  width: 22px;
  height: 22px;
  left: 1327px;
  top: 200px;
  color: #D5D9DD;
  &:hover{
    color: #97a5ac;
  }
  ${props =>
      props.isActive &&
      `color: #13A4EC;`
  }
`

const FontSize2Icon = styled(FontSize2)<IActiveIcon>`
  position: fixed;
  width: 16px;
  height: 16px;
  left: 1360px;
  top: 102px;
  color: #D5D9DD;
  &:hover{
    color: #97a5ac;
  }
  ${props =>
      props.isActive &&
      `color: #13A4EC;`
  }
`


const ArrowDropDownIcon = styled(ChevronDown)`
  position: absolute;
  width: 15px;
  height: 15px;
  padding: 0px;
  margin: 0px;
  left: 1px;
  top: 2px;
  color: #AAB2BB;
`

const HeaderContainter = styled.div`
  position: fixed;
  left: 1215px;
  /* right: 15px; */
  width: 210px;
  height: 15px;
  top: 15px;

  /* position: absolute;
  left: 84.38%;
  right: 1.04%;
  top: 1.87;
  bottom: 96.25%; */
  /* top: 15px; */
  /* margin-top: 15px; */
  /* margin-right: 15px; */
  /* margin-bottom: 770px; */
`

const Header = styled.header`
  position: absolute;
  left: 1px;
  width: 209px;
  height: 12px;
  top: 2px;
  font-family: 'Fira Sans';
  font-weight: 600px;
  font-size: 11px;
  font-style: normal;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  line-height: 13px;
  color: #788994;
`

const SizeText = styled.div`
  position: fixed;
  left: 1376px;
  width: 42px;
  height: 40px;
  top: 90px;
  font-family: 'Fira Sans';
  font-weight: normal;
  font-size: 12px;
  font-style: normal;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-indent: 10px;
  color: #2D3A41;
`

const LineHeightText = styled.div`
  position: fixed;
  left: 1242px;
  width: 77px;
  height: 40px;
  top: 190px;
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 12px;
  font-style: normal;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-indent: 10px;
  color: #333333;
`

const LineHeightUnit = styled.div`
  position: fixed;
  left: 1279px;
  width: 30px;
  height: 40px;
  top: 190px;
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 12px;
  font-style: normal;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* flex-direction: row; */
  /* text-align: right; */
  /* text-align: right; */
  /* justify-items: right; */
  color: #AAB2BB;
`


const LetterSpaceText = styled.div`
  position: fixed;
  left: 1346px;
  width: 52px;
  height: 40px;
  top: 190px;
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 12px;
  font-style: normal;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-indent: 10px;
  color: #333333;
`

const LetterSpaceUnit = styled.div`
  position: fixed;
  left: 1384px;
  width: 30px;
  height: 40px;
  top: 190px;
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 12px;
  font-style: normal;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* flex-direction: row; */
  /* text-align: right; */
  /* text-align: right; */
  /* justify-items: right; */
  color: #AAB2BB;
`

const Button = styled.button`
  position: fixed;
  width: 210px;
  height: 40px;
  left: 1215px;
  top: 295px;
  background: #2AC45D;
  border-radius: 5px;
  border: 2px solid;
  &:hover{
    border-color: #13A4EC;
  }
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
`

const AlignContainer = styled.div`
  position: fixed;
  width: 210px;
  height: 40px;
  left: 1215px;
  top: 240px;
`
const AlignBorders = styled.div`
  position: absolute;
  background: #FFFFFF;
  border: 1px solid #E8ECF0;
  box-sizing: border-box;
  border-radius: 4px;
  width: 210px;
  height: 40px;
`

const AlignSeparator1 = styled.div`
  position: absolute;
  width: 1px;
  height: 38px;
  top: 1px;
  left: 53px;
  background: #E8ECF0;
`

const AlignSeparator2 = styled.div`
  position: absolute;
  width: 1px;
  height: 38px;
  top: 1px;
  left: 105px;
  background: #E8ECF0;
`
const AlignSeparator3 = styled.div`
  position: absolute;
  width: 1px;
  height: 38px;
  top: 1px;
  left: 157px;
  background: #E8ECF0;
`

const SpaceSeparator = styled.div`
  position: fixed;
  width: 1px;
  height: 38px;
  top: 191px;
  left: 1320px;
  background: #E8ECF0;
`

const FontFamilyContainer = styled.div`
  position: fixed;
  width: 210px;
  height: 40px;
  top: 40px;
  left: 1215px;
`

const FontFamilyBorders = styled.div`
  position: absolute;
  background: #FFFFFF;
  border: 1px solid #E8ECF0;
  box-sizing: border-box;
  border-radius: 4px;
  width: 210px;
  height: 40px;
`

const FontFamilySelect = styled.select<IFontFamily>`
  position: fixed;
  border: none;
  color: #AAB2BB;
  width: 199px;
  height: 38px;
  font-family: ${(props) => props.fontFamily};
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-indent: 10px;

  option {
    font-size: 14px;
    line-height: 14px;
    color: #2D3A41;
  }
`

const FontFamilyDropDown = styled.div`
  position: fixed;
  width: 18px;
  height: 18px;
  top: 51px;
  left: 1397px;
  /* transform: rotate(-180deg); */
`

const FontFamilyRectangle = styled.div`
  /* position: absolute; */
  width: 16px;
  height: 16px;
  top: 17px;
  left: 17px;
  border: 1px solid #E8ECF0;
  border-radius: 2px;
  /* transform: rotate(-180deg); */
`

const Color = styled.div`
  position: fixed;
  width: 210px;
  height: 40px;
  top: 140px;
  left: 1215px;
  border: 1px solid #E8ECF0;
  border-radius: 4px;
`
const Select = styled.select`
  position: absolute;
  width: 203px;
  height: 38px;
  padding-left: 25px;
  border: none;
  color: #AAB2BB;
  font-family: Fira Sans;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-indent: 10px;

  option {
    font-family: Fira Sans;
    font-size: 14px;
    line-height: 14px;
    color: #2D3A41;
  }

  /* margin-right: 50px; */
  /* background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png') 95% 50% no-repeat; */
  /* background: #FFFFFF; */
  
  /* background-size: 8px 8px; */
  /* background-color: #AAB2BB; */
  /* background-position: 90%; */
  /* appearance: none; */
  /* --moz-appearance:none; */
  /* -webkit-appearance: none; */
  `

  const ColorComponent = styled.div<ITextColor>`
    position: absolute;
    width: 18px;
    height: 18px;
    top: 11px;
    left: 12px;
    background: ${(props) => props.textColor};
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 3px;

  `

  const SpacingContainer = styled.div`
    position: fixed;
    width: 210px;
    height: 40px;
    top: 190px;
    left: 1215px;
  `
  const FontWeightStyle = styled.div`
    position: fixed;
    width: 210px;
    height: 40px;
    top: 90px;
    left: 1215px;
  `

  const Input = styled.div`
    position: absolute;
    width: 210px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E8ECF0;
    box-sizing: border-box;
    border-radius: 4px;
  `
  const VerticalSeparator = styled.div`
    position: fixed;
      width: 1px;
      height: 38px;
      top: 91px;
      left: 1349px;
      background: #E8ECF0;
  `

const SelectStyle = styled.select`
  position: fixed;
  width: 127px;
  height: 38px;
  border: none;
  color: #AAB2BB;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-indent: 15px;
  font-style: normal;
  font-family: Fira Sans;

  option {
    font-family: Fira Sans;
    font-size: 14px;
    line-height: 14px;
    color: #2D3A41;
  }
  /* margin-right: 50px; */
  /* background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png') 95% 50% no-repeat; */
  /* background: #FFFFFF; */
  /* border: 2px solid #E8ECF0; */
  /* background-size: 8px 8px; */
  /* background-color: #AAB2BB; */
  /* background-position: 90%; */
  /* appearance: none; */
  /* --moz-appearance:none; */
  /* -webkit-appearance: none; */
  /* border-radius: 4px; */
  `



export const Toolbar:React.FC<ToolbarProps> = (props) => {

  const [textColor, setTextColor] = useState('#FFFFFF')
  const [fontFamily, setFontFamily] = useState('Fira Sans')  

  const {editorState, updateEditorState, styles} = props

  const applyStyle = (e:any) => {
    e.preventDefault()
    const block = e.currentTarget.getAttribute('data-block')
    console.log( "Block: ",  block)
    // updateEditorState(RichUtils.toggleBlockType(editorState, block))
    updateEditorState(editorState => RichUtils.toggleBlockType(editorState, block))
  }

  const toggleCustomStyle = (e:any, style: string) => {
    e.preventDefault()
    console.log(e.target.value)

    switch (style) {
      case 'color':
        updateEditorState(editorState => styles.color.toggle(editorState, e.target.value))
        setTextColor(e.target.value)
        break;
      case 'fontSize':
        updateEditorState(editorState => styles.fontSize.toggle(editorState, '14px'))
        break;
      case 'style':
        updateEditorState(editorState => RichUtils.toggleInlineStyle(editorState, e.target.value))
        break;
      case 'fontFamily':
          // updateEditorState(editorState => RichUtils.toggleInlineStyle(editorState, e.target.value))
          console.log(RichUtils.getCurrentBlockType(editorState))
          updateEditorState(editorState => styles.fontFamily.toggle(editorState, e.target.value))
          setFontFamily(e.target.value)
          break;
    
      default:
        break;
    }

    
    // if(style === 'color') {
    //   setTextColor(e.target.value)
    // }
    
  }

  const isActive = (block:string) => {
    const currentBlockType = RichUtils.getCurrentBlockType(editorState)
    if(currentBlockType === block) {
      return true
    }
    return false
  } 

  const isActiveInline = (style: any) => {
    if(editorState.getCurrentInlineStyle().has(style)) {
      return true
    }
    return false
  } 

  // const applyStyle = () => {
  //   RichUtils.toggleBlockType()
  // }

  return(
    <ToolbarContainer>
      <HeaderContainter>
        <Header>
          text
        </Header>
        </HeaderContainter>
        <FontFamilyContainer>
          <FontFamilyBorders>
            <FontFamilySelect onChange={e => toggleCustomStyle(e, 'fontFamily')} fontFamily={fontFamily}>
              <option value=""  hidden>Font Family</option>
              <option value="Inter" style={{fontFamily: 'Inter'}}>Inter</option>
              <option value="Fira Sans" style={{fontFamily: 'Fira Sans'}}>Fira Sans</option>
              <option value="Lato" style={{fontFamily: 'Lato'}}>Lato</option>
              <option value="Montserrat" style={{fontFamily: 'Montserrat'}}>Monserrat</option>
              <option value="Roboto Condensed" style={{fontFamily: 'Roboto Condensed'}}>Roboto Condensed</option>
              <option value="Source Sans Pro" style={{fontFamily: 'Source Sans Pro'}}>Source Sans Pro</option>
              <option value="Oswald" style={{fontFamily: 'Oswald'}}>Oswald</option>
              <option value="Raleway" style={{fontFamily: 'Raleway'}}>Raleway</option>
              <option value="Merriweather" style={{fontFamily: 'Merriweather'}}>Merriweather</option>
              <option value="PT Sans" style={{fontFamily: 'PT Sans'}}>PT Sans</option>
              <option value="Roboto Slab" style={{fontFamily: 'Roboto Slab'}}>Roboto Slab</option>
            </FontFamilySelect>
          </FontFamilyBorders>
        </FontFamilyContainer>

        <FontWeightStyle>
          <Input>
            <SelectStyle onChange={e => toggleCustomStyle(e, 'style')}>
              <option value="" hidden>Style</option>
              <option value="BOLD">Bold</option>
              <option value="ITALIC">Italic</option>
              <option value="UNDERLINE">Underline</option>
            </SelectStyle>
            <VerticalSeparator/>  
            <FontSize2Icon isActive={isActiveInline('CUSTOM_FONT_SIZE_14px')} onClick={e => toggleCustomStyle(e, 'fontSize')}/>
            <SizeText>
              14
            </SizeText>
          </Input>  
        </FontWeightStyle>

        <Color>
          <Select onChange={e => toggleCustomStyle(e, 'color')}>
            <option value="" hidden>Color</option>
            <option value="#e22c2c">#e22c2c</option>
            <option value="#2ce235">#2ce235</option>
            <option value="#0d95e433">#0d95e433</option>
            <option value="#e98c1354">#e98c1354</option>
          </Select>
          <ColorComponent textColor={textColor}/>    
        </Color>

        <SpacingContainer>
          <Input>
           <SpaceSeparator/>
           <TextSpacingIcon isActive={isActive('lspace')} data-block='lspace' onClick={applyStyle}/>
           <LineHeightText>
             125
           </LineHeightText>
           <LineHeightUnit>
              %
           </LineHeightUnit>
           <LetterSpaceText>
             0.6
           </LetterSpaceText>
           <LetterSpaceUnit>
             px
           </LetterSpaceUnit>
           <FormatLineSpacingIcon isActive={isActive('lheight')} data-block='lheight' onClick={applyStyle}/>
          </Input>
        </SpacingContainer>
            
      
      <AlignContainer>
        <AlignBorders>
          <AlignSeparator1/>
          <AlignSeparator2/>
          <AlignSeparator3/>
          <AlignMiddleIcon isActive={isActive('center')} data-block='center' onClick={applyStyle}/>
          <JustifyLeftIcon isActive={isActive('left')} data-block='left' onClick={applyStyle}/>
          <JustifyRightIcon isActive={isActive('right')} data-block='right' onClick={applyStyle}/>
          <AlignJustifyIcon isActive={isActive('justify')} data-block='justify' onClick={applyStyle}/>
        </AlignBorders>
      </AlignContainer>
      
    <Button onClick={props.onSaveClick}>Save Changes</Button>
    </ToolbarContainer> 
  )
}