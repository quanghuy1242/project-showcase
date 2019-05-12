import { mergeStyleSets } from 'office-ui-fabric-react';

export const style = mergeStyleSets({
  projectCollectionWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  projectCollection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '1rem',
    justifyItems: 'center'
  },
  headerText: {
    marginBottom: '0.5rem', 
    fontWeight: 500
  }
})