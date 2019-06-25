import React, { Component } from 'react';
import { 
  DocumentCard, 
  DocumentCardPreview,
  DocumentCardTitle
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

class ProjectItem extends Component {
  render() {
    const projectContent = {
      previewImages: [{
        name: this.props.name,
        linkProps: {
          href: this.props.href
        },
        previewImageSrc: this.props.image,
        imageFit: ImageFit.cover,
        height: 150
      }]
    };
    return (
      <Link style={{width: '100%', textDecoration: 'none'}} to={`/project/${this.props._id}`}>
        <DocumentCard 
          onClick={() => {}} 
          style={{
            maxWidth: 'inherit', // Do cái component này giới hạn max-width: 320px
            outline: 'none',
          }}
        >
          <DocumentCardPreview {...projectContent} />
          <DocumentCardTitle
            title={this.props.name}
            shouldTruncate={true}
          />
          {/* <DocumentCardActivity
            activity={new Date(this.props.date).toLocaleString()}
            people={[
              {
                name: this.context.administrator.name,
                profileImageSrc: this.context.administrator.image
              }
            ]}
          /> */}
        </DocumentCard>
      </Link>
    );
  }
}
ProjectItem.contextType = AppContext;

export default ProjectItem;