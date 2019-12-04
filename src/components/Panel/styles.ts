import { IStyle } from 'fela'

export const PANEL: IStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: 'dashed 1px #bfbfbf',
  backgroundColor: '#fff',
  borderRadius: '8px',
  flexGrow: 1,
  marginLeft: '10px',
  nested: {
    ':first-of-type': {
      marginLeft: '0'
    }
  }
}

export const BOTTOM_ROW: IStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,
  justifyContent: 'space-between'
}

export const LEFT_BOTTOM_AREA: IStyle = {
  backgroundColor: '#49CBED',
  color: '#fff',
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontSize: '12px',
  borderBottomLeftRadius: '6px',
  paddingLeft: '6px',
  paddingRight: '6px',
  paddingTop: '3px',
  paddingBottom: '3px'
}

export const CONTENT: IStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  padding: '10px'
}
