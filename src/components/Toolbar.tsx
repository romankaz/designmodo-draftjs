import React, { useState } from 'react'
import styled from 'styled-components'
import {EditorState, RichUtils} from 'draft-js'

import { SaveButton } from '../elements/SaveButton'
import { AlignContainer, AlignBorders, AlignSeparator1, AlignSeparator2, AlignSeparator3, AlignMiddleIcon, JustifyRightIcon, JustifyLeftIcon, AlignJustifyIcon } from '../elements/TextAlignment'
import { Input, SpacingContainer, SpaceSeparator, TextSpacingIcon, LineHeightText, LineHeightUnit, LetterSpaceText, LetterSpaceUnit, FormatLineSpacingIcon} from '../elements/Spacing'
import { Color, Select, ColorComponent } from '../elements/TextColor'
import { FontWeightStyle, SelectStyle, VerticalSeparator, FontSize2Icon, SizeText} from '../elements/Style'
import { HeaderContainter, Header } from '../elements/Header'
import {FontFamilyContainer, FontFamilyBorders, FontFamilySelect} from '../elements/FontFamily'

interface ToolbarProps {
  onSaveClick(): void,
  editorState: EditorState,
  updateEditorState: React.Dispatch<React.SetStateAction<EditorState>>,
  styles: any
}

const ToolbarContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 800px;
  left: 1200px;
  top: 0px;
  background: #FFFF;
`

export const Toolbar:React.FC<ToolbarProps> = (props) => {

  const [textColor, setTextColor] = useState('#FFFFFF')
  const [fontFamily, setFontFamily] = useState('Fira Sans')  

  const {editorState, updateEditorState, styles} = props

  const applyBlockStyle = (e:React.MouseEvent) => {
    e.preventDefault()
    const block = e.currentTarget.getAttribute('data-block')
    if(block) {
      updateEditorState(editorState => RichUtils.toggleBlockType(editorState, block))
    }
  }

  const toggleCustomStyle = (e: any, style: string) => {
    e.preventDefault()
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
        updateEditorState(editorState => styles.fontFamily.toggle(editorState, e.target.value))
        setFontFamily(e.target.value)
        break;    
      default:
        break;
    } 
  }

  const isActiveBlock = (block: string) => {
    const currentBlockType = RichUtils.getCurrentBlockType(editorState)
    if(currentBlockType === block) {
      return true
    }
    return false
  } 

  const isActiveInline = (style: string) => {
    if(editorState.getCurrentInlineStyle().has(style)) {
      return true
    }
    return false
  } 

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
          <FontSize2Icon isActive={isActiveInline('CUSTOM_FONT_SIZE_14px')} onClick={e => toggleCustomStyle(e, 'fontSize')} onMouseDown={(e) => e.preventDefault()}/>
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
          <TextSpacingIcon isActive={isActiveBlock('lspace')} data-block='lspace' onClick={applyBlockStyle} onMouseDown={(e) => e.preventDefault()}/>
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
          <FormatLineSpacingIcon isActive={isActiveBlock('lheight')} data-block='lheight' onClick={applyBlockStyle} onMouseDown={(e) => e.preventDefault()}/>
        </Input>
      </SpacingContainer>
            
      
      <AlignContainer>
        <AlignBorders>
          <AlignSeparator1/>
          <AlignSeparator2/>
          <AlignSeparator3/>
          <AlignMiddleIcon isActive={isActiveBlock('center')} data-block='center' onClick={applyBlockStyle} onMouseDown={(e) => e.preventDefault()}/>
          <JustifyLeftIcon isActive={isActiveBlock('left')} data-block='left' onClick={applyBlockStyle} onMouseDown={(e) => e.preventDefault()}/>
          <JustifyRightIcon isActive={isActiveBlock('right')} data-block='right' onClick={applyBlockStyle} onMouseDown={(e) => e.preventDefault()}/>
          <AlignJustifyIcon isActive={isActiveBlock('justify')} data-block='justify' onClick={applyBlockStyle} onMouseDown={(e) => e.preventDefault()}/>
        </AlignBorders>
      </AlignContainer>
      
      <SaveButton onClick={props.onSaveClick}>Save Changes</SaveButton>

    </ToolbarContainer> 
  )
}