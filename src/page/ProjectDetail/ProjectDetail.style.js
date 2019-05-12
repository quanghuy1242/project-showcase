import { mergeStyleSets } from 'office-ui-fabric-react';

export const style = mergeStyleSets({
  topDetail: {
    display: 'flex',
    flexDirection: 'row',
  },
  topDetailImage: {
    marginRight: '0.5rem',
    width: 120,
    height: 120,
    backgroundColor: 'rgb(0, 120, 212)'
  },
  topDetailInfo: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column'
  },
  topDetailAction: {
    alignSelf: 'center',
    marginRight: '2rem'
  },
  pivotWrapper: {
    marginTop: '0.5rem'
  }
})