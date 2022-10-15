import { observer } from "mobx-react";
import store, { Product } from "../store/productStore";

function SearchResults() {

    const changeCurrentProduct = (product: Product) => {
        store.setCurrentProduct(product);
    }

    return (
        <div>
            {store.filteredPoducts.map((item: Product, index: number) => {
                return (
                    <div className="result-box" key={index} onClick={() => changeCurrentProduct(item)}>
                        <div>
                            <div className="result-header">{item.productName}</div>
                            <div className="result-tags">
                                {
                                    item.tags?.map((tag, index) => <div key={index} className="result-tag-bg"><div className="result-tag-item">{tag}</div></div>)
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

export default observer(SearchResults)