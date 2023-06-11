import { observer } from "mobx-react";
import searchIcon from "../assets/images/search.svg"
import store from "../store/productStore";

function ProductsTab() {

    const handleCheckBox = (index: number) => {
        store.handleFilters(index);
    }

    const handleSearch = (input: string) => {
        store.setKeyword(input);
        if (input.length >= 3) {
            store.filters.length > 0 ? store.searchProduct(input.toLowerCase()) : store.searchFromFullProducts(input.toLowerCase());
        }
        if (input.length < 1) {
            store.filterProducts(store.filters);
        }
    }

    return (
        <div className='prod-container'>
            <section className='prod-header'>I'm looking for...</section>
            <section className='inline-checkbox'>
                {store.categories.map((item, index) => {
                    return (
                        <div className="form-check form-check-inline" key={item.id}>
                            <input className="form-check-input" type="checkbox" id={String(item.id)} value={item.id} checked={item.checked} onChange={() => handleCheckBox(index)} />
                            <label className="form-check-label category-label" htmlFor={String(item.id)}>{item.category}</label>
                        </div>
                    )
                })}
            </section >
            <section className="search-box">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-transparent br-none">
                            <img src={searchIcon} alt="Q" />
                        </div>
                    </div>
                    <input
                        type="text"
                        className="form-control br-none bg-transparent"
                        id="inlineFormInput"
                        placeholder="Type here..."
                        value={store.keyword}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </section>
        </div >
    )
}

export default observer(ProductsTab)