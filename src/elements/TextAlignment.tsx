import styled from 'styled-components'
import {JustifyCenter} from '@styled-icons/open-iconic/JustifyCenter'
import {JustifyLeft} from '@styled-icons/open-iconic/JustifyLeft'
import {JustifyRight} from '@styled-icons/open-iconic/JustifyRight'
import {AlignJustify} from '@styled-icons/fa-solid/AlignJustify'

interface IActiveIcon {
  isActive: boolean
}

export const AlignContainer = styled.div`
  position: fixed;
  width: 210px;
  height: 40px;
  left: 1215px;
  top: 240px;
`

export const AlignBorders = styled.div`
  position: absolute;
  background: #FFFFFF;
  border: 1px solid #E8ECF0;
  box-sizing: border-box;
  border-radius: 4px;
  width: 210px;
  height: 40px;
`

export const AlignSeparator1 = styled.div`
  position: absolute;
  width: 1px;
  height: 38px;
  top: 1px;
  left: 53px;
  background: #E8ECF0;
`

export const AlignSeparator2 = styled.div`
  position: absolute;
  width: 1px;
  height: 38px;
  top: 1px;
  left: 105px;
  background: #E8ECF0;
`
export const AlignSeparator3 = styled.div`
  position: absolute;
  width: 1px;
  height: 38px;
  top: 1px;
  left: 157px;
  background: #E8ECF0;
`

export const AlignMiddleIcon = styled(JustifyCenter)<IActiveIcon>`
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

export const JustifyLeftIcon = styled(JustifyLeft)<IActiveIcon>`
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

export const JustifyRightIcon = styled(JustifyRight)<IActiveIcon>`
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

export const AlignJustifyIcon = styled(AlignJustify)<IActiveIcon>`
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