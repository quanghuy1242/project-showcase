import { mergeStyleSets } from '@uifabric/styling';

export const style = mergeStyleSets({
  projectCollectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 210
  },
  projectCollection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gridGap: '1rem',
    justifyItems: 'center'
  },
  headerText: {
    marginBottom: '0.5rem'
  }
})