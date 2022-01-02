import { ContainerOutlined, UnorderedListOutlined, CreditCardOutlined, UserOutlined, LineChartOutlined } from '@ant-design/icons';

export const listTitle = [
    {
        icon: <LineChartOutlined />,
        title: "Dashboard",
        key: "dashboard",
        sub: []
    },

    {
        icon: <UnorderedListOutlined />,
        title: "Category",
        key: "category",
        sub: [
            {
                code: "list-category",
                label: "List category"
            },
            {
                code: "add-category",
                label: "Add category"
            },
            {
                code: "udpate-category",
                label: "Update category"
            },
        ]
    },

    {
        icon: <ContainerOutlined />,
        title: "Product",
        key: "product",
        sub: [
            {
                code: "list-product",
                label: "List product"
            },
            {
                code: "add-product",
                label: "Add product"
            },
            {
                code: "update-product",
                label: "Update product"
            },
        ]
    },

    {
        icon: <CreditCardOutlined />,
        title: "Order",
        key: "order",
        sub: [
            {
                code: "list-order",
                label: "List order"
            },
        ]
    },
]

