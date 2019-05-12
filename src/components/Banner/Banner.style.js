import { mergeStyleSets } from 'office-ui-fabric-react';

export const style = mergeStyleSets({
  bannerWrapper: {
    width: '100%',
    height: 250,
    backgroundColor: 'rgb(0, 120, 212)',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: 'white',
    display: 'block',
    marginBottom: '0.5rem'
  }
})