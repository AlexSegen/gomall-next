import Head from 'next/head'
import Header from './shared/header';
import Footer from './shared/footer';
const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Head>
            <title>{ title ? title + " - Gomall Store" : "Gomall Store" }</title>
            <meta name = "description" content={ description || "Gomall Store" } />
        </Head>

        <Header/>
        
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;