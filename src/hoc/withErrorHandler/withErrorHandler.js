import React, {useEffect, useState} from 'react';
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return function WithErrorHandler(props) {
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.interceptors.response.use(response => {
        console.log('[In hoc interceptor]', response);
        return response;
      }, error => {
        setError(error);
        throw error;
      })
    }, []);

    return (
      <>
        <Modal show>This is error message</Modal>
        <WrappedComponent {...props}/>
      </>
    );
  }
};

export default withErrorHandler;