import { mergeStyles } from 'office-ui-fabric-react/lib/Styling'

export const style = {
  bannerWrapper: mergeStyles({
    width: '100%',
    height: 250,
    backgroundColor: 'rgb(0, 120, 212)',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  headerText: mergeStyles({
    color: 'white',
    display: 'block',
    marginBottom: '0.5rem'
  })
}