export class CommentResponse {
    constructor(
        {
            id,
            name,
            star,
            content,
            email,
            phonenumber,
            product_id,
            parent_id,
            type,
            createdAt,
            updatedAt
        }) {
        this.id = id;
        this.name = name;
        this.star = star;
        this.content = content;
        this.email = email;
        this.phoneNumber = phonenumber || "0987654321";
        this.productId = product_id;
        this.parentId = parent_id;
        this.type = type;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}