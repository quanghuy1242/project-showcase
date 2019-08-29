import { mergeStyleSets } from '@uifabric/styling'

export const getStyle = ({isHorizontal}) => {
  return mergeStyleSets({
    StackPanelStyle: {
      display: 'flex',
      flexDirection: isHorizontal ? 'row' : 'column',
    }
  })
}