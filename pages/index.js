import React, { useState } from "react";
import { Heading, Page, EmptyState, Card, Layout } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import store from "store-js";
import ProductList from "./components/ProductList";

const Index = () => {
  const [modal, setModal] = useState({ open: false });
  const emptyState = !store.get("ids");

  function handleSelection(resources) {
    const idsFromSelection = resources.selection.map((product) => product.id);
    setModal({ open: false });
    store.set("ids", idsFromSelection);

    console.log("the ids selected are: ", store.get("ids"));
  }

  console.log("emptyState: ", emptyState);
  return (
    <Page>
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
