var index = 1;
export class CategoryResponse {
    constructor({ data, current_page, limit, total }) {
        this.data = (data || []).map((item, index) => {
            return new CategoryItem({ ...item, index: index + 1 });
        })

        this.currentPage = current_page;
        this.limit = limit;
        this.total = total;
    }

}

class CategoryItem {

    constructor({ index, id, name, parent_id, line_age, image, createdAt, updatedAt }) {

        this.index = index;
        this.key = id || "";
        this.id = id || "";
        this.name = name || "";
        this.parent_id = parent_id || "";
        this.line_age = line_age || "";
        this.image = "http://localhost:9000/upload/" + image || "";
        this.createdAt = new Date(createdAt).toLocaleDateString() || "";
        this.updatedAt = new Date(updatedAt).toLocaleDateString() || "";
    }



}

