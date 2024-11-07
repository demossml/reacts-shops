import { useContext } from "react";
import { Modalcontext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Product } from "../components/Product";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";

export function ProductPage() {
  const { products, error, loading, addProduct } = useProducts();
  // const [modal, setModal] = useState(false);
  const {
    modal,
    open: openModel,
    close: closeModal,
  } = useContext(Modalcontext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {modal && (
        <Modal title="Create new product" onClose={closeModal}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text text-3xl py-1 px-7 text-center"
        onClick={openModel}
      >
        +
      </button>
    </div>
  );
}
