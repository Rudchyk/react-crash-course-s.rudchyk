import React from 'react';
import axios from 'axios';
import Button from '../components/button/Button';

class Module1 extends React.Component {
  state = {
    isError: false,
    isLoading: false,
    isDone: false,
    errorMessage: null,
    img: null,
    cancelTokenSource: null
  }

  sendRequest = (e) => {
    const requestType = document.querySelector('input[name=requestType]:checked').value;
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    this.setState({
      isLoading: true,
      cancelTokenSource: source
    });

    axios.get(requestType, {
        cancelToken: source.token
      })
      .then((response) => {
        this.setState({
          img: response.data.file,
          isDone: true
        });
      })
      .catch((error) => {
        let message;
        if (error.response) {
          // The request was made and the server responded with a status code
          message = `${error.response.data}: ${error.response.status}`;
        } else if (error.request) {
          // The request was made but no response was received
          message = 'Error: Network Error';
        } else if (axios.isCancel(error)) {
          message = 'Request canceled!'
        } else {
          // Something happened in setting up the request that triggered an Error
          message = error.message;
        }
        this.setState({
          errorMessage: message,
          isError: true
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  }

  stopRequest = (e) => {
    this.state.cancelTokenSource.cancel();
  }

  refresh = (e) => {
    this.setState({
      isError: false,
      isLoading: false,
      isDone: false
    });
  }

  render() {
    const { isError, isLoading, isDone, img, errorMessage } = this.state;

    return (
      <>
        <div className="row mb-3">
          <div className="col">
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input className="form-check-input" type="radio" name="requestType" value="https://aws.random.cat/meow" defaultChecked onChange={this.refresh} />
                Good Request
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input className="form-check-input" type="radio" name="requestType" value="https://sdfsdf" onChange={this.refresh} />
                Bad Request
              </label>
            </div>
          </div>
        </div>

        {(isError && !isLoading && !isDone) && <div className="alert alert-danger" role="alert">
          <div>{errorMessage}</div>
        </div>}

        <div className="row">
          <div className="col">
            {(!isLoading && !isDone && !isError) && <Button onClick={this.sendRequest} title="Send request" btnClass="primary" />}
            {isLoading && <Button onClick={this.stopRequest} title="Cancel request" btnClass="warning" />}
            {(isError && !isLoading && !isDone) && <div>
              <Button onClick={this.sendRequest} title="Send one more request" btnClass="danger" /> or <Button onClick={this.refresh} title="Reset" btnClass="secondary" />
            </div>}
            {isDone && <Button onClick={this.refresh} title="Reset" btnClass="secondary" />}
          </div>
        </div>

        {isLoading && <div className="my-5 text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>}

        {isDone && <div className="card my-5 mx-auto" style={{width: '500px'}}>
          <img src={img} className="card-img-top" alt="" />
        </div>}
      </>
    );
  }
}

export default Module1;
