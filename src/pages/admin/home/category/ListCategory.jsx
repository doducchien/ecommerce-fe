import useListCategory from "./hook/list_category_hook";
import { Table, Tag } from 'antd'

function ListCategory() {

    const { information, onClickDetail } = useListCategory();

    console.log(information.data)

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
                    <Tag key={`update-${id}`} className="tag-action" color={'green'}>update</Tag>
                </div>
            )
        },
    ];


    return <Table className="list-category" dataSource={information?.data || []} columns={columns} />;
}
export default ListCategory;