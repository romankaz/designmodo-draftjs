import styled from 'styled-components'


interface IFontFamily {
  fontFamily: string
}

export const FontFamilyContainer = styled.div`
  position: fixed;
  width: 210px;
  height: 40px;
  top: 40px;
  left: 1215px;
`

export const FontFamilyBorders = styled.div`
  position: absolute;
  background: #FFFFFF;
  border: 1px solid #E8ECF0;
  box-sizing: border-box;
  border-radius: 4px;
  width: 210px;
  height: 40px;
`

export const FontFamilySelect = styled.select<IFontFamily>`
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