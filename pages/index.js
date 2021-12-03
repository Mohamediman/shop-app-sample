import React, { useState } from "react";
import { Heading, Page, EmptyState, Card, Layout } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import axios from "axios";
import ProductList from "./components/ProductList";

const Index = () => {
  const [modal, setModal] = useState({ open: false });
  const emptyState = !store.get("ids");

  function handleSelection(resources) {
    const idsFromSelection = resources.selection.map((product) => product.id);
    setModal({ open: false });
    store.set("ids", idsFromSelection);

    //===== Deleting & Adding product to the products array
    const selectedProducts = resources.selection;
    // deleteApiData();
    selectedProducts.map((product) => makeApiCall(product));
  }

  function deleteApiData() {
    const url = "/api/products";

    axios.delete(url);
  }

  async function makeApiCall(products) {
    const url = "/api/products";

    axios
      .post(url, products)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: "Select New Products",
          onAction: () => setModal({ open: true }),
        }}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={modal.open}
        onCancel={() => setModal({ open: false })}
        onSelection={(resources) => handleSelection(resources)}
      />

      {emptyState ? (
        <Layout>
          <EmptyState
            heading="Manage Your Inventory Transfers"
            action={{
              content: "select Products",
              onAction: () => setModal({ open: true }),
            }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            fullWidth
          >
            <p>Get more products from the Store</p>
          </EmptyState>
        </Layout>
      ) : (
        <ProductList />
      )}
    </Page>
  );
};

export default Index;
