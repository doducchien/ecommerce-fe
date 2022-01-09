import useUpdateCategory from "./hook/update_category_hook"
import { Row, Col, Input, Upload, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
function UpdateCategory(props) {

    const {
        currentCategoryId,
        selectedImage,
        categoryName,
        onChangeInput,
        clearData,
        onUpdateCategory,
        beforeUpload
    } = props.payload;

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
                    beforeUpload={beforeUpload}
                >
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>New Icon</div>
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

            <Input onChange={onChangeInput} style={{ margin: "15px 0" }} placeholder='Rename for category' />
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
                        onClick={() => onUpdateCategory({ categoryName, selectedImage: selectedImage[0] })}
                        danger
                    >
                        Update
                    </Button>
                </Col>
            </Row>

        </div>
    )
}

export default UpdateCategory