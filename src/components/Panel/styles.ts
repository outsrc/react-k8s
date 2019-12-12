import { IStyle } from 'fela'

export const PANEL: IStyle = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '4px',
  flexGrow: 0,
  flexBasis: '50%'
}

export const INTERNAL: IStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '5px',
  borderRadius: '4px',
  flexGrow: 0
}

export const BOTTOM_ROW: IStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,
  justifyContent: 'space-between'
}

export const LEFT_BOTTOM_AREA: IStyle = {
  display: 'flex',
  flexGrow: 1,
  flexShrink: 0,
  fontSize: '12px',
  paddingLeft: '6px',
  paddingRight: '6px',
  paddingTop: '3px',
  paddingBottom: '3px'
}

export const RIGHT_BOTTOM_AREA: IStyle = {
  display: 'flex',
  flexGrow: 1,
  flexShrink: 0,
  fontSize: '12px',
  paddingLeft: '6px',
  paddingRight: '6px',
  paddingTop: '3px',
  paddingBottom: '3px',
  justifyContent: 'flex-end'
}

export const CONTENT: IStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  flexWrap: 'wrap',
  padding: '10px'
}
