import React, { Component } from 'react';
import MainContent from '../../components/MainContent/MainContent';
import StackPanel from '../../components/StackPanel/StackPanel';
import {
  Text,
  Pivot,
  PivotItem,
  PivotLinkSize,
  PrimaryButton,
  css,
  Spinner,
  SpinnerSize,
  Dialog, 
  DialogType,
  DialogFooter,
  DefaultButton
} from 'office-ui-fabric-react';
import { getstyle } from './ProjectDetail.style'
import { ProjectAPI } from '../../api/projects.api';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        technical: {}
      },
      isLoading: false,
      dialogTitle: "",
      dialogSubText: "",
      isDialogHidden: true
    };
  }

  onToggleLoading() {
    this.setState({ isLoading: !this.state.isLoading });
  }

  onCopyText() {
    navigator.clipboard.writeText(`${this.context.baseUrl}${this.props.match.url}`)
      .then(() => this.handleOpenDialog("Thành công", "Đã copy thành công link vào bộ nhớ tạm"));
  }

  handleCloseDialog() {
    this.setState({ isDialogHidden: true });
  }

  handleOpenDialog(title, subText) {
    this.setState({
      dialogTitle: title,
      dialogSubText: subText,
      isDialogHidden: false
    });
  }

  async componentDidMount() {
    try {
      this.onToggleLoading();
      const project = await ProjectAPI.getProject(this.props.match.params.id);
      this.setState({
        project: project
      });
      this.onToggleLoading();
    } catch (error) {
      this.props.history.push('/404');
    }
  }

  render() {
    const classNames = getstyle({
      image: this.state.project.image
    });
    return (
      <MainContent hasPadding={true} isChild={true} className={classNames.projectDetailWrapper}>
        <Dialog
          hidden={this.state.isDialogHidden}
          onDismiss={() => this.handleCloseDialog()}
          dialogContentProps={{
            type: DialogType.normal,
            title: this.state.dialogTitle,
            subText: this.state.dialogSubText
          }}
        >
          <DialogFooter>
            <DefaultButton text="Close" onClick={() => this.handleCloseDialog()} />
          </DialogFooter>
        </Dialog>
        <StackPanel>
          <div className={classNames.topDetail}>
            <div className={classNames.topDetailImage} />
            <div className={classNames.topDetailInfo}>
              <div className={classNames.topDetailTitle}>
                <Text variant="xxLarge">{this.state.project.name}</Text>
              </div>
              <div className={classNames.topDetailProjectId}>
                <Link to={`/technical/${this.state.project.technical.nameId}`}>
                  <Text variant="Large">{this.state.project.technical.name}</Text>
                </Link>
              </div>
              <div className={classNames.topDetailProjectId}>
                <Text variant="Large">{this.state.project._id}</Text>
              </div>
            </div>
            <div className="spacer" />
            <div className={classNames.topDetailAction}>
              <PrimaryButton
                text="Open"
                split={true}
                onClick={() => {
                  window.open(this.state.project.url, '_blank');
                }}
                menuProps={{
                  items: [
                    {
                      key: 'copyUrl',
                      text: 'Copy link',
                      iconProps: { iconName: 'Copy' },
                      onClick: this.onCopyText.bind(this)
                    },
                    {
                      key: 'shareFacebook',
                      text: 'Share link',
                      iconProps: { iconName: 'Share' }
                    }
                  ],
                  alignTargetEdge: true
                }}
              />
            </div>
          </div>
          <div className={classNames.pivotWrapper}>
            <Pivot linkSize={PivotLinkSize.large}>
              <PivotItem headerText="Description">
                <div className={classNames.pivotItem}>
                  {this.state.isLoading
                    ? <Spinner size={SpinnerSize.large} />
                    : this.state.project.description}
                </div>
              </PivotItem>
              <PivotItem headerText="Screenshots">
                <div className={css(classNames.pivotItem, classNames.screenshotWrapper)}>
                  {this.state.project.screenshots
                    ? this.state.project.screenshots.map(
                        (screenshot, index) => (
                          <img src={screenshot} key={index} alt="Hmmmm" className={classNames.screenshot} />
                        )
                      )
                    : (<div>Không có ảnh chụp màn hình</div>)}
                </div>
              </PivotItem>
            </Pivot>
          </div>
        </StackPanel>
      </MainContent>
    );
  }
}
ProjectDetail.contextType = AppContext;

export default ProjectDetail;