import { observer } from "mobx-react";
import store from "../store/productStore";

function ProductPreview() {
    const item = store.currentProduct;
    return (
        <div>
            <section className='prod-header'>Product Details</section>
            <section className='prod-details'>
                <div className="prod-name">{item.productName}</div>
                <div className="result-tags">
                    {
                        item.tags?.map((tag: string, index: number) => <div key={index} className="result-tag-bg"><div className="result-tag-item">{tag}</div></div>)
                    }
                </div>
                <div className="prod-manf">
                    <a href={item.manufacturerUrl} target="_blank" rel="noopener noreferrer">
                        <button className="primary-btn">Go to Manufacturer</button>
                    </a>
                </div>
                <div className="prod-desc">
                    {
                        item.description?.map((desc: string, index: number) => {
                            return (
                                <div key={index}>
                                    {desc}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="options-col">
                    {
                        item.option1 !== null &&
                        <div data-testid="prod-option">
                            <div className="radio-inline">
                                <input type="radio" id="option1" name="prod-option" value={item.option1} />
                                <label className="option-label" htmlFor="option1">Option 1</label>
                            </div>
                            <div className="option-desc">{item.option1}</div>
                        </div>
                    }
                    {
                        item.option2 !== null &&
                        <div data-testid="prod-option">
                            <div className="radio-inline">
                                <input type="radio" id="option2" name="prod-option" value={item.option2} />
                                <label className="option-label" htmlFor="option2">Option 2</label>
                            </div>
                            <div className="option-desc">{item.option2}</div>
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default observer(ProductPreview)