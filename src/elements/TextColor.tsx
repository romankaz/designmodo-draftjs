import styled from 'styled-components'


interface ITextColor {
  textColor: string
}

export const Color = styled.div`
  position: fixed;
  width: 210px;
  height: 40px;
  top: 140px;
  left: 1215px;
  border: 1px solid #E8ECF0;
  border-radius: 4px;
`

export const Select = styled.select`
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
  `

export const ColorComponent = styled.div<ITextColor>`
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