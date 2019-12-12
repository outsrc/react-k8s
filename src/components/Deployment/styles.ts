import { IStyle } from 'fela'

export const INNER: IStyle = {
  backgroundColor: '#F8F8F8',
  border: 'solid 1px #E8E8E8',
  flexWrap: 'nowrap'
}

export const CONTENT: IStyle = {
  flexWrap: 'nowrap'
}

export const DEPLOYMENT: IStyle = {
  flexGrow: 1,
  flexBasis: '100%'
}

export const DEPLOYMENT_TEXT: IStyle = {
  fontSize: '16px',
  color: '#888'
}

export const LEFT: IStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1
}

export const RIGHT: IStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '40px',
  flexShrink: 0,
  alignItems: 'flex-end'
}

export const REPLICAS: IStyle = {
  fontSize: '32px',
  color: '#888',
  fontFamily: '"Roboto", sans-serif'
}

export const IMAGE_NAME: IStyle = {
  fontSize: '24px',
  fontWeight: 200,
  color: '#888',
  fontFamily: '"Roboto", sans-serif'
}

export const LABELS: IStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  flexShrink: 0,
  marginTop: '8px'
}

export const LABEL: IStyle = {
  backgroundColor: '#FFD5B8'
}

export const LABEL_TEXT: IStyle = {
  color: '#FA6400'
}

export const PORT: IStyle = {
  backgroundColor: '#32C5FF'
}

export const PORT_TEXT: IStyle = {
  color: 'white'
}

export const ENV: IStyle = {
  display: 'flex',
  flexShrink: 0,
  marginTop: '8px'
}

export const ENV_TABLE: IStyle = {
  fontFamily: '"Robotto", sans-serif',
  fontSize: '14px',
  color: 'gray',
  backgroundColor: '#F0F0F0',
  width: '100%',
  padding: '4px',
  borderRadius: '4px',
  nested: {
    '> tbody > tr > td': {
      borderBottom: 'solid 1px #ddd'
    },
    '> tbody > tr:last-of-type > td': {
      borderBottom: 'none'
    }
  }
}
