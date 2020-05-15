import Layout from '../components/Layout'
import ProductsGrid from '../components/store/ProductsGrid';

const Index = () => {
    
    return ( 
        <Layout >
            <div className="text-center mt-5">
                <h1>Store</h1>
                <p>This is the Store Page.</p>
            </div>
            <ProductsGrid/>
        </Layout>
     );
}
 
export default Index;