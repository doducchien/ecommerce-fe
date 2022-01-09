import AddCategory from './AddCategory';
import { Modal, Spin, Row, Button, Tag, Table } from 'antd';
import useListCategory from './hook/list_category_hook';
import { PlusOutlined } from '@ant-design/icons';
import useAddCategory from './hook/add_category_hook';
import useUpdateCategory from './hook/update_category_hook';
import UpdateCategory from './UpdateCategory';
import useLayout from '../../../../common_hook/layout_hook';
function Category() {

    useLayout({ code: 'Category', label: 'Category' })

    const columns = [
        {
            title: 'Index',
            dataIndex: 'index',
            key: 'index',
            render: (index) => <p>{index}</p>
        },

        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image) => (<img className="item-image" src={image} />)
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },

        {
            title: 'Created at',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },

        {
            title: 'Updated at',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: (id) => (
                <div>
                    <Tag key={`detail-${id}`} onClick={() => onClickDetail(id)} className="tag-action" color={'geekblue'}>detail</Tag>
                    <Tag key={`update-${id}`} onClick={() => onShowModal_update(id)} className="tag-action" color={'green'}>update</Tag>
                </div>
            )
        },
    ];
    const {
        information,
        addCategoryResult,
        onClickDetail,

    } = useListCategory();

    const {
        onAddCategory,
        onShowModal: onShowModal_add,
        onCloseModal: onCloseModal_add,
        showModal: showModal_add
    } = useAddCategory();

    const {
        showModal: showModal_update,
        onUpdateCategory,
        onShowModal: onShowModal_update,
        onCloseModal: onCloseModal_update,
        currentCategoryId,
        onChangeInput,
        clearData,
        beforeUpload,
        selectedImage,
        categoryName
    } = useUpdateCategory();

    // useEffect(() => {

    // }, [showModal_add, showModal_update])




    return (
        <div className="list-category">
            <Spin spinning={addCategoryResult?.isLoading} tip="loading...">
                <Row justify="end">
                    <Button onClick={onShowModal_add} className="add-btn" size="large" type="primary" >
                        <PlusOutlined />
                        New Category
                    </Button>
                </Row>
                <Modal
                    onCancel={onCloseModal_add}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    okButtonProps={{ style: { display: 'none' } }}
                    title="New Category"
                    visible={showModal_add}
                >
                    <AddCategory dataControl={{ onAddCategory }} />
                </Modal>

                <Modal
                    centered
                    onCancel={onCloseModal_update}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    okButtonProps={{ style: { display: 'none' } }}
                    title="Update Category"
                    visible={showModal_update}
                >
                    <UpdateCategory
                        payload={{
                            currentCategoryId,
                            onChangeInput,
                            clearData,
                            beforeUpload,
                            selectedImage,
                            categoryName,
                            onUpdateCategory,

                        }}
                    />
                </Modal>

                <Table className="list-category-table" dataSource={information?.data || []} columns={columns} />

            </Spin>


        </div >
    )
}

export default Category;