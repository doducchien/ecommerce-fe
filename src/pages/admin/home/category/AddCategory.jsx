import { Row, Col, Upload, Form, Input, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import useAddCategory from './hook/add_category_hook';


function AddCategory(props) {
    const { data, setData, onAddCategory } = props.dataControl;
    const { selectedImage,
        categoryName,
        setCategoryName,
        clearData,
        beforeUpload,
        onChangeInput,
        onSubmit
    } = useAddCategory();

    useEffect(() => {
        // if (categoryName && selectedImage.length > 0) {
        //     setData({
        //         categoryName,
        //         selectedImage: selectedImage[0]
        //     })
        // }
    }, [categoryName, selectedImage])

    const genImgUpload = () => {
        if (selectedImage.length > 0) {
            const src = URL.createObjectURL(selectedImage[0]);
            return <img className="img-upload" src={src} />
        }
        return (
            <div style={{ textAlign: 'center' }} className="img-upload">
                <Upload
                    name="avatar"
                    listType="picture-card"
                    accept='.png'
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                >
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Category Icon</div>
                    </div>
                </Upload>
            </div>
        )
    }
    return (
        <div className="add-category-page">
            <Row>

                {genImgUpload()}

            </Row>

            <Input onChange={onChangeInput} style={{ margin: "15px 0" }} placeholder='Name of category' />
            <Row>
                <Col span={12}>
                    <Button
                        type='submit'
                        style={{ width: '100%' }}
                        onClick={clearData}>
                        Clear
                    </Button>
                </Col>
                <Col span={12}>
                    <Button
                        type='primary'
                        style={{ width: '100%' }}
                        onClick={() => onAddCategory({ categoryName, selectedImage: selectedImage[0] })}
                        danger
                    >
                        Create
                    </Button>
                </Col>
            </Row>

        </div>
    )
}

export default AddCategory;