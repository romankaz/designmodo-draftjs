import styled from 'styled-components'
import {FontSize2} from '@styled-icons/remix-editor/FontSize2'

interface IActiveIcon {
  isActive: boolean
}

export const FontWeightStyle = styled.div`
    position: fixed;
    width: 210px;
    height: 40px;
    top: 90px;
    left: 1215px;
  `

export const SelectStyle = styled.select`
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
  `
  export const VerticalSeparator = styled.div`
   position: fixed;
     width: 1px;
     height: 38px;
     top: 91px;
     left: 1349px;
     background: #E8ECF0;
 `

export const FontSize2Icon = styled(FontSize2)<IActiveIcon>`
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

export const SizeText = styled.div`
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


