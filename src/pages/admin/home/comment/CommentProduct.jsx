import useCommentProduct from "./hook/commentProduct.hook";
import { Comment, Tooltip, Avatar, } from 'antd';
import moment from 'moment';
import { StarOutlined } from '@ant-design/icons';


export default function CommentProduct(props) {
    const { productId } = props;
    const { listComment, rateActive, onChangeRate } = useCommentProduct({ productId })






    const genStars = (stars) => {
        let listStar = []
        for (let i = 0; i < stars; i++) {
            listStar.push(<StarOutlined key={`${i}-item-rate`} style={{ color: 'yellowgreen', }} />)
        }
        return <span onClick={() => onChangeRate(stars)} className={"item-rate " + (rateActive === stars ? 'item-active' : "")}>{listStar}</span>
    }

    return (
        <div className="comment-on-product">
            <span onClick={() => onChangeRate(-1)} className="item-rate">Tất cả</span>
            {genStars(5)}
            {genStars(4)}
            {genStars(3)}
            {genStars(2)}
            {genStars(1)}
            {listComment.map(cmt => {
                console.log(cmt)
                return (
                    <Comment
                        key={cmt.id + "-comment"}
                        author={<a>{cmt.name} - {cmt.phoneNumber}</a>}
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                        content={
                            <p>
                                {genStars(cmt.star)}
                                {cmt.content}
                            </p>
                        }
                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                <span>{moment().from(cmt.createdAt)}</span>
                            </Tooltip>
                        }
                    />
                )
            })}

        </div>

    );
}

