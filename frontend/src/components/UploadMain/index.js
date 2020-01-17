import React, { Component } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import api from "~/services/api";

import { Content } from "./styles";

import Upload from "~/components/Upload";
import FileList from "~/components/FileList";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIdsImages } from '~/store/modules/task/actions';


class UploadMain extends Component {

  state = {
    uploadedFiles:[]
  };

  getImg(){
    setTimeout(() => {
      const img = this.props.images;

      if (img) {
        this.setState({
          uploadedFiles: img
        });
      }
    }, 1000)
  }

  componentDidMount() {
    this.getImg();
  }

  handleUpload = files => {

    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id == uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {

    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("files", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          this.updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data.id,
          url: response.data.url
        });
        this.props.getIdsImages(response.data.id);
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  handleDelete = async id => {
    await api.delete(`files/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    const { uploadedFiles } = this.state;



    return (
        <Content>
          {/* {console.log('abaixo')}
          {console.log(uploadedFiles)} */}
          {console.log(this.props.images)}

          <Upload onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (
            <FileList files={uploadedFiles} onDelete={this.handleDelete} />
          )}
        </Content>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getIdsImages}, dispatch)
}

export default connect(null, mapDispatchToProps)(UploadMain)
