import Search from "antd/lib/input/Search";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { changeKeyword } from "../hooks/searchKeyword.hook";
import { changeFetchProductMode } from "../slice/fetchProductMode.slice";
function HeaderSection() {
    const dispatch = useDispatch();
    const onSearch = value =>{
        dispatch(changeFetchProductMode(`SEARCH-${value}`))
        dispatch(changeKeyword(value))
    }


    return (
        <header className="header-section">
            <div className="logo-header">
                <img src="/assets/icon/logo-bk.jpg" className="img-bk" />
                <h3>Hust Ecommerce System</h3>

            </div>


            <Search size='large' placeholder="input search text" onSearch={onSearch} height={'100%'} className='search' />
            <div>
                <ShoppingCartOutlined style={{ fontSize: "30px" }} />
                &nbsp; Order

            </div>

        </header>
    )
}

export default HeaderSection;