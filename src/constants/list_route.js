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



export const listRoute = {
    PUBLIC,
    ADMIN,
    AUTHEN,
    LOGIN_AUTHEN,
    SIGNUP_AUTHEN,
    DASHBOARD_ADMIN,
    CATEGORY_ADMIN,
    CATEGORY_ADMIN_LIST,
    CATEGORY_ADMIN_UPDATE,
    CATEGORY_ADMIN_ADD
}