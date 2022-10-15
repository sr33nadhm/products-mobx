import products from "../apis/products.json";

type Item = typeof products[0];

function SearchResults() {
    return (
        <div>
            {products.map((item: Item, index: number) => {
                return (
                    <div className="result-box" key={index}>
                        <div>
                            <div className="result-header">{item.productName}</div>
                            <div className="result-tags">
                                {
                                    item.tags.map((tag, index) => <div key={index} className="result-tag-bg"><div className="result-tag-item">{tag}</div></div>)
                                }
                            </div>
                        </div>
                        <div className="result-category">
                            <div>{item.category}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults