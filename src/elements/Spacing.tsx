import styled from 'styled-components'
import {TextSpacing} from '@styled-icons/remix-editor/TextSpacing'
import {FormatLineSpacing} from '@styled-icons/material/FormatLineSpacing'

interface IActiveIcon {
  isActive: boolean
}


export const SpacingContainer = styled.div`
    position: fixed;
    width: 210px;
    height: 40px;
    top: 190px;
    left: 1215px;
  `

export const Input = styled.div`
    position: absolute;
    width: 210px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #E8ECF0;
    box-sizing: border-box;
    border-radius: 4px;
`

export const SpaceSeparator = styled.div`
  position: fixed;
  width: 1px;
  height: 38px;
  top: 191px;
  left: 1320px;
  background: #E8ECF0;
`

export const TextSpacingIcon = styled(TextSpacing)<IActiveIcon>`
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

export const LineHeightText = styled.div`
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

export const LineHeightUnit = styled.div`
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
  color: #AAB2BB;
`

export const LetterSpaceText = styled.div`
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

export const LetterSpaceUnit = styled.div`
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
  color: #AAB2BB;
`

export const FormatLineSpacingIcon = styled(FormatLineSpacing)<IActiveIcon>`
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
