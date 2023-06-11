import { observer } from "mobx-react";
import store, { Product } from "../store/productStore";

function SearchResults() {

    const changeCurrentProduct = (product: Product) => {
        store.setCurrentProduct(product);
    }

    const clearFilters = () => {
        store.setFilters([]);
        store.setKeyword("");
        store.resetProducts();
    }

    return (
        <div data-testid="search-container">
            {store.filteredPoducts.map((item: Product, index: number) => {
                return (
                    <div data-testid="search-result" className="result-box" key={index} onClick={() => changeCurrentProduct(item)}>
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
            {
                (store.filteredPoducts.length < 1) &&
                <div data-testid="search-result" className="result-box">
                    <div>
                        <div className="result-header">Uh Oh!</div>
                        <div className="result-tags">
                            No results found for your query !
                        </div>
                    </div>
                    <div className="result-category">
                        <div className="result-tag-bg">
                            <div
                                className="result-tag-item"
                                onClick={clearFilters}
                            >
                                Clear filters
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default observer(SearchResults)