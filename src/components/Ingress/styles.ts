import { IStyle } from 'fela'

export const INNER: IStyle = {
  border: 'solid 2px #999',
  borderRadius: '6px',
  backgroundColor: '#fbfbfb'
}

export const INGRESS: IStyle = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: '100%'
}

export const INGRESS_TEXT: IStyle = {
  fontSize: '18px',
  color: '#888'
}

export const CONTENT: IStyle = {
  padding: 0
}

export const HOSTS: IStyle = {
  fontFamily: '"Roboto", sans-serif',
  color: '#888',
  fontSize: '36px',
  fontWeight: 200,
  borderTopLeftRadius: '3px'
}

export const ANNOTATIONS: IStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  flexShrink: 0,
  marginTop: '8px'
}

export const ANNOTATION: IStyle = {
  backgroundColor: '#CEC0FD'
}

export const ANNOTATION_TEXT: IStyle = {
  color: '#6236FF'
}

export const PATHS: IStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
  width: '100%'
}

export const PATH: IStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '10px'
}

export const PATH_LEFT: IStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '30%',
  flexShrink: 0,
  color: '#888',
  fontSize: '30px',
  fontFamily: '"Roboto", sans-serif',
  fontWeight: 200
}

export const PATH_RIGHT: IStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
}
