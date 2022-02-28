const HOST = process.env.REACT_APP_API_ENDPOINT;

const UPLOAD = `${HOST}/upload`

const PUBLIC = '/';

// ADMIN
const ADMIN = '/admin';
const AUTHEN = '/authen';
const LOGIN_AUTHEN = `${AUTHEN}/login`;
const SIGNUP_AUTHEN = `${AUTHEN}/signup`;
const DASHBOARD_ADMIN = `${ADMIN}/dashboard`;
const CATEGORY_ADMIN = `${ADMIN}/category`;
const CATEGORY_ADMIN_LIST = `${CATEGORY_ADMIN}/list-category`;
const CATEGORY_ADMIN_UPDATE = `${CATEGORY_ADMIN}/update-category/:categoryId`;
const CATEGORY_ADMIN_ADD = `${CATEGORY_ADMIN}/add-category`;

const PRODUCT_ADMIN = `${ADMIN}/product`;
const PRODUCT_ADMIN_ADD = `${PRODUCT_ADMIN}/add`;
const PRODUCT_ADMIN_DETAIL = `${PRODUCT_ADMIN}/detail/:id`;

const ORDER_ADMIN = `${ADMIN}/order`;
const ORDER_ADMIN_LIST = `${ADMIN}/order/`;
const ORDER_ADMIN_DETAIL = `${ADMIN}/order/detail/:id`;

//HOME
const UPLOAD_URL = `${HOST}/upload/`;

export const listRoute = {
    HOST,
    UPLOAD,
    PUBLIC,
    ADMIN,
    AUTHEN,
    LOGIN_AUTHEN,
    SIGNUP_AUTHEN,
    DASHBOARD_ADMIN,
    CATEGORY_ADMIN,
    CATEGORY_ADMIN_LIST,
    CATEGORY_ADMIN_UPDATE,
    CATEGORY_ADMIN_ADD,
    PRODUCT_ADMIN,
    PRODUCT_ADMIN_DETAIL,
    PRODUCT_ADMIN_ADD,
    ORDER_ADMIN,
    ORDER_ADMIN_LIST,
    ORDER_ADMIN_DETAIL,
    UPLOAD_URL
}