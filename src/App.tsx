import { VerticalAlignTopOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './App.css';
import CustomTab from './components/CustomTab';
import ProductPreview from './components/ProductPreview';
import store from './store/productStore';
import { observer } from "mobx-react";

function App() {

  return (
    <div className="container app-container">
      <header className='page-header'>
        <h1 className="demand-header">Create Demand</h1>
        <h6 className='demand-desc'>Search the product you need here. Use tags to find any alternative. </h6>
      </header>
      <main className='page-main'>
        <CustomTab />
        {
          store.filteredPoducts.length > 3 &&
          <div className="sticky-btn-row">
            <div className='go-up-btn'>
              <IconButton
                sx={{ color: "white", fontSize: "65px", backgroundColor: "rgba(132, 146, 166, 0.25)", '&:hover': { backgroundColor: "#12b8ff" } }}
                aria-label="go to top"
                size="large"
                onClick={() => window.scrollTo(0, 0)}
              >
                <VerticalAlignTopOutlined fontSize='large' />
              </IconButton>
            </div>
          </div>
        }
      </main>
      {
        (store.currentProduct.productName) &&
        <aside className='selected-product'>
          <ProductPreview />
        </aside>
      }
    </div>
  );
}

export default observer(App);
