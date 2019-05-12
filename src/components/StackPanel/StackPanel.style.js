import { mergeStyleSets } from 'office-ui-fabric-react'

export const getStyle = ({isHorizontal}) => {
  return mergeStyleSets({
    StackPanelStyle: {
      display: 'flex',
      flexDirection: isHorizontal ? 'row' : 'column',
    }
  })
}