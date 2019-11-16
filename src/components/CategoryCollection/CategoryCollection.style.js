import { mergeStyleSets } from '@uifabric/styling';

export const getStyle = () => {
  return mergeStyleSets({
    categoriesWrapper: {
      minHeight: 210
    },
    categoriesListWrapper: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gridGap: '1rem',
      justifyItems: 'center'
    }
  })
}