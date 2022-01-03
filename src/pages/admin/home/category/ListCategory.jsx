import useListCategory from "./hook/list_category_hook";
import { Table, Tag, Button, Modal, Spin, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import AddCategory from "./AddCategory";

function ListCategory() {
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
                    <Tag key={`update-${id}`} onClick={() => onClickUpdate(id)} className="tag-action" color={'green'}>update</Tag>
                </div>
            )
        },
    ];
    const {
        information,
        addCategoryResult,
        onClickDetail,
        onClickUpdate,
        onAddCategory,
        showModal,
        onShowModal,
        onCloseModal,
    } = useListCategory();

    console.log(addCategoryResult)




    return (
        <div className="list-category">
            <Spin spinning={addCategoryResult?.isLoading} tip="loading...">
                <Row justify="end">
                    <Button onClick={onShowModal} className="add-btn" size="large" type="primary" >
                        <PlusOutlined />
                        New Category
                    </Button>
                </Row>
                <Modal
                    onCancel={onCloseModal}
                    cancelButtonProps={{ style: { display: 'none' } }}
                    okButtonProps={{ style: { display: 'none' } }}
                    title="New Category"
                    visible={showModal}
                >
                    <AddCategory dataControl={{ onAddCategory }} />
                </Modal>

                <Table className="list-category-table" dataSource={information?.data || []} columns={columns} />

            </Spin>


        </div >
    )
}
export default ListCategory;