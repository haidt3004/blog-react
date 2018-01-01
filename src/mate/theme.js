import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {blue600, grey900, white } from 'material-ui/styles/colors'

const theme = getMuiTheme({
  palette: {
  },
  appBar: {
    color: blue600,
    height: 57,
    maxHeight: 57,
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: blue600,
  },
  iconMenu: {
    color: white
  }
})

export default theme