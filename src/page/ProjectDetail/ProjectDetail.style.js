import { mergeStyles } from 'office-ui-fabric-react';

export const style = {
  topDetail: mergeStyles({
    display: 'flex',
    flexDirection: 'row',
  }),
  topDetailImage: mergeStyles({
    marginRight: '0.5rem',
    width: 120,
    height: 120,
    backgroundColor: 'rgb(0, 120, 212)'
  }),
  topDetailInfo: mergeStyles({
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column'
  }),
  topDetailTitle: mergeStyles({}),
  topDetailProjectId: mergeStyles({}),
  topDetailAction: mergeStyles({
    alignSelf: 'center',
    marginRight: '2rem'
  }),
  pivotWrapper: mergeStyles({
    marginTop: '0.5rem'
  })
}