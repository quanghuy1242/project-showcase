import { mergeStyleSets } from 'office-ui-fabric-react';

export const getStyle = () => {
  return mergeStyleSets({
    categoriesWrapper: {
      minHeight: 210
    },
    categoriesListWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gridGap: '1rem',
      justifyItems: 'center'
    }
  })
}