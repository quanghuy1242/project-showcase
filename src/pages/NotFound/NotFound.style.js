import { mergeStyleSets } from '@uifabric/styling';

export const getStyle = () => {
  return mergeStyleSets({
    notFoundWrapper: {
      height: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontWeight: 400,
    },
    blockText: {
      display: 'block'
    }
  })
}