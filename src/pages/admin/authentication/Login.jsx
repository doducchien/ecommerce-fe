import { Form, Input, Button, Typography, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


import useAuth from './auth.hook';

function Login() {

    const { onFinish, onFinishFailed, authen } = useAuth();
    return (
        <Spin spinning={authen.isLoading}>

            <div className='login-page'>
                <video autoPlay muted loop >
                    <source src="/assets/video/video.mp4" type='video/mp4' />
                </video>
                <div className="focus-page">
                    <Typography.Title level={3}>Đăng nhập cho ADMIN</Typography.Title>
                    <img className='logo-bk' src='/assets/icon/logo-bk.jpg'></img>
                    <Form
                        name="basic"
                        // initialValues={{
                        //     remember: true,
                        // }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item

                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Không được bỏ trống tên đăng nhập!',
                                },
                            ]}
                        >
                            <Input placeholder="Tên đăng nhập" prefix={<UserOutlined />} />

                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Không được bỏ trống mật khẩu!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Mật khẩu" prefix={<LockOutlined />} />
                        </Form.Item>



                        <Form.Item

                        >
                            <Button type="primary" htmlType="submit">
                                Đăng nhập
                            </Button>
                        </Form.Item>

                        <Link to="/admin/signup">Đến trang đăng ký</Link>
                    </Form>
                </div>

            </div>
        </Spin>
    );


}

export default Login;