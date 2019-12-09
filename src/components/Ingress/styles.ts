import { IStyle } from 'fela'

export const INNER: IStyle = {
  border: 'solid 1px #E8E8E8',
  backgroundColor: '#f8f8f8'
}

export const INGRESS: IStyle = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: '100%'
}

export const CONTENT: IStyle = {
  padding: 0
}

export const HOSTS: IStyle = {
  fontFamily: '"Roboto", sans-serif',
  color: '#000',
  fontSize: '24px',
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
  fontSize: '22px',
  fontFamily: '"Roboto", sans-serif',
  fontWeight: 200
}

export const PATH_RIGHT: IStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
}
