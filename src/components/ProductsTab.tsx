import { useState } from "react";
import searchIcon from "../assets/images/search.svg"

function ProductsTab() {

    const [categories, setCategories] = useState([
        { category: "Software Development", id: 1, checked: false },
        { category: "Daily Business", id: 2, checked: false },
        { category: "Graphic Editors", id: 3, checked: false },
        { category: "Text Editors", id: 4, checked: false },
        { category: "Management Tools", id: 5, checked: false }
    ]);

    const [keyword, setkeyword] = useState("");

    const handleCheckBox = (index: number) => {
        let newCategories = [...categories];
        newCategories[index].checked = !newCategories[index].checked;
        setCategories(newCategories);
    }

    const handleSearch = (input: string) => {
        setkeyword(input);
    }

    return (
        <div className='prod-container'>
            <section className='prod-header'>I'm looking for...</section>
            <section className='inline-checkbox'>
                {categories.map((item, index) => {
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
                        value={keyword}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </section>
        </div >
    )
}

export default ProductsTab