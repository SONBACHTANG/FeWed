import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import { registerStart } from '../../store/actions/authAction';
import Verify from './verify';
import './register.css';
import CryptoJS from 'crypto-js';
import actionTypes from '../../store/actions/actionType';

const Register = () => {
  const [form] = Form.useForm();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state => state.auth.isLoading);
  const registerSuccess = useSelector(state => state.auth.registerSuccess);
  const dispatch = useDispatch();

  const handleChangeInput = (e, id) => {
    if (id === 'username') setUsername(e.target.value);
    if (id === 'email') setEmail(e.target.value);
    if (id === 'password') setPassword(e.target.value);
  };

  const checkValidateInput = () => {
    if (!username || !email || !password) {
      alert('Missing parameter!');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (checkValidateInput()) {
      const encryptedPassword = CryptoJS.HmacSHA256(password, "ThisismySecretKeyThisismySecretKey").toString(CryptoJS.enc.Base64);
      const param = {
        username: username,
        email: email,
        password: encryptedPassword,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCI+CiAgICA8cGF0aCBmaWxsPSJyZ2JhKDE1MywgMTUzLCAxNTMsIDAuNykiIGQ9Ik0xOC40IDE4LjVsMi41IDUgLjIuNWg2LjlsLTIuMS00LjMtNC4xLTEuNXYtMi41YzEuMi0xLjEgMS44LTMuMiAxLjgtNS4xIDAtMi4xLTItMy42LTMuNS0zLjZzLTMuNSAxLjYtMy41IDMuNmMwIDEuOS41IDQgMS44IDUuMXYyLjVoLS4xbC4xLjN6Ii8+CiAgICA8cGF0aCBmaWxsPSJyZ2IoMTUzLCAxNTMsIDE1MykiIGQ9Ik0xNy41IDE5bC01LTEuOHYtM2MxLjQtMS4yIDItMy44IDItNS45IDAtMi40LTIuMy00LjMtNC00LjMtMS43IDAtNCAxLjgtNCA0LjMgMCAyLjIuNiA0LjcgMiA1Ljl2M2wtNSAxLjgtMi41IDVoMTlsLTIuNS01eiIvPgo8L3N2Zz4K"
      };
      try {
        var res = await dispatch(registerStart(param));
        if (res.type === actionTypes.ACCOUNT_LOGIN_SUCCESS) {
          setIsOpenModal(true)
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (registerSuccess) {
      setIsOpenModal(true);
    }
  }, [registerSuccess]);

  const toggleSignupModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      {isLoading && <Loader />}
      {isOpenModal && (
        <Verify
          data={{
            username: username,
            password: password,
            email: email,

          }}
          toggleFromParent={toggleSignupModal}
          isOpen={isOpenModal}
        />
      )}
      <div className="Register-container">
        <div className="Register-box">
          <h2>Register</h2>
          <Form form={form} onFinish={handleSignUp}>
            <div className="input-group">
              <Form.Item
                label="Username"
                name="username"
                type="text"
                rules={[{ required: true, message: 'Please enter your username!' }]}
                labelCol={{ span: 24 }}
                validateTrigger="onBlur"
              >
                <Input size="large" value={username} onChange={(e) => handleChangeInput(e, 'username')} />
              </Form.Item>
            </div>
            <div className="input-group">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'The input is not valid E-mail!' }
                ]}
                labelCol={{ span: 24 }}
                validateTrigger="onBlur"
              >
                <Input size="large" value={email} onChange={(e) => handleChangeInput(e, 'email')} />
              </Form.Item>
            </div>
            <div className="input-group">
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
                labelCol={{ span: 24 }}
              >
                <Input.Password
                  size="large"
                  value={password}
                  onChange={(e) => handleChangeInput(e, 'password')}
                />
              </Form.Item>
            </div>
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </>
  );
};

export default Register;
