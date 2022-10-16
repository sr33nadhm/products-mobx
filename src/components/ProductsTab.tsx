import { observer } from "mobx-react";
import { useState } from "react";
import searchIcon from "../assets/images/search.svg"
import store from "../store/productStore";

function ProductsTab() {

    const [categories, setCategories] = useState([
        { category: "Software Development", id: 1, checked: false },
        { category: "Daily Business", id: 2, checked: false },
        { category: "Graphic Editors", id: 3, checked: false },
        { category: "Text Editors", id: 4, checked: false },
        { category: "Management Tools", id: 5, checked: false }
    ]);

    const [keyword, setkeyword] = useState<string>("");

    const [filters, setFilters] = useState<string[]>([]);

    const handleCheckBox = (index: number) => {
        let newCategories = [...categories];
        let value = newCategories[index].checked;
        newCategories[index].checked = !value;
        setCategories(newCategories);
        var newFilters: string[] = [...filters];
        if (value === true) {
            // remove the filter from filters, already selected
            newFilters = newFilters.filter(item => {
                return newCategories[index].category !== item
            })
        }
        else {
            // add the filter to filters, not selected
            newFilters.push(newCategories[index].category);
        }
        setFilters(newFilters);
        store.filterProducts(newFilters);
    }

    const handleSearch = (input: string) => {
        setkeyword(input);
        if (input.length >= 3) {
            filters.length > 0 ? store.searchProduct(input.toLowerCase()) : store.searchFromFullProducts(input.toLowerCase());
        }
        if (input.length < 1) {
            store.filterProducts(filters);
        }
    }

    return (
        <div className='prod-container'>
            <section className='prod-header'>I'm looking for...</section>
            <section className='inline-checkbox'>
                {categories.map((item, index) => {
                    return (
                        <div className="form-check form-check-inline" key={item.id}>
                            <input className="form-check-input" role="checkbox" type="checkbox" id={String(item.id)} value={item.id} checked={item.checked} onChange={() => handleCheckBox(index)} />
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
                        value={keyword}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </section>
        </div >
    )
}

export default observer(ProductsTab)