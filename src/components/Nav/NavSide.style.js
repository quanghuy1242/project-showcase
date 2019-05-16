import { mergeStyleSets } from 'office-ui-fabric-react'

export const style = mergeStyleSets({
  navWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh - 55px)',
    transition: '0.2s',
    backgroundColor: 'white',
    zIndex: 100
  },
  searchBoxWrapper: {
    width: '100%'
  }
})