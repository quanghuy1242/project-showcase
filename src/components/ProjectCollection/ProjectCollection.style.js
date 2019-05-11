import { mergeStyles } from 'office-ui-fabric-react/lib/Styling'

export const style = {
  projectCollectionWrapper: mergeStyles({
    display: 'flex',
    flexDirection: 'column'
  }),
  projectCollection: mergeStyles({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '1rem',
    justifyItems: 'center'
  }),
  headerText: mergeStyles({
    marginBottom: '0.5rem', 
    fontWeight: 500
  })
}