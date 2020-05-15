import Layout from '../components/Layout'
import ProductsGrid from '../components/store/ProductsGrid';

const Index = ({products}) => {

    return ( 
        <Layout >
            <div className="text-center mt-5">
                <h1>Store</h1>
                <p>This is the Store Page.</p>
            </div>
            <ProductsGrid products={products}/>
        </Layout>
     );
}


/* export async function getServerSideProps(context) {
    const res = await fetch(`http://strapi.pxservices.live/products`)
    const products = await res.json()

    return {
      props: { products },
    }
}
 */

Index.getInitialProps = async () => {
    const res = await fetch(`http://strapi.pxservices.live/products`)
    const products = await res.json()
    return { products  }
}

export default Index;