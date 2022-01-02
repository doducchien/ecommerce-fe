import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Signup() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login-page'>
            <div className='focus-page'>

                <Typography.Title level={3}>Đăng ký tài khoản ADMIN</Typography.Title>
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
                            Đăng ký
                        </Button>
                    </Form.Item>

                    <Link to="/admin/login">Đến trang đăng nhập</Link>
                </Form>
            </div>

        </div>
    );

}

export default Signup;